import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
} from "react-native";
import { CryptoItem } from "../components/CryptoItem";
import { SearchBar } from "../components/SearchBar";
import { CryptoDetailScreen } from "./CryptoDetailScreen";
import { getCryptoData } from "../services/cryptoService";
import { CryptoData } from "../types/crypto";

export const CryptoScreen = () => {
  const [cryptos, setCryptos] = useState<CryptoData[]>([]);
  const [filteredCryptos, setFilteredCryptos] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoData | null>(null);

  useEffect(() => {
    loadCryptos();
  }, []);

  const loadCryptos = async () => {
    try {
      const data = await getCryptoData();
      setCryptos(data);
      setFilteredCryptos(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (text: string) => {
    const filtered = cryptos.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(text.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCryptos(filtered);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={filteredCryptos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedCrypto(item)}>
            <CryptoItem crypto={item} />
          </TouchableOpacity>
        )}
        onRefresh={loadCryptos}
        refreshing={loading}
      />

      <Modal
        visible={selectedCrypto !== null}
        animationType="slide"
        onRequestClose={() => setSelectedCrypto(null)}
      >
        {selectedCrypto && (
          <CryptoDetailScreen
            crypto={selectedCrypto}
            onClose={() => setSelectedCrypto(null)}
          />
        )}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
