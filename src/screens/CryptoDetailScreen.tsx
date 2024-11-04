import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { PriceChart } from "../components/PriceChart";
import { getCryptoHistory } from "../services/cryptoService";
import { CryptoData } from "../types/crypto";

interface Props {
  crypto: CryptoData;
  onClose: () => void;
}

export const CryptoDetailScreen: React.FC<Props> = ({ crypto, onClose }) => {
  const [priceHistory, setPriceHistory] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPriceHistory();
  }, []);

  const loadPriceHistory = async () => {
    try {
      const data = await getCryptoHistory(crypto.id);
      setPriceHistory(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{crypto.name}</Text>
      <Text style={styles.price}>${crypto.current_price.toFixed(2)}</Text>
      <Text
        style={[
          styles.change,
          { color: crypto.price_change_percentage_24h > 0 ? "green" : "red" },
        ]}
      >
        {crypto.price_change_percentage_24h.toFixed(2)}%
      </Text>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <PriceChart priceData={priceHistory} />
      )}

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Market Cap</Text>
          <Text style={styles.statValue}>
            ${(crypto.market_cap / 1000000).toFixed(2)}M
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  price: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 4,
  },
  change: {
    fontSize: 18,
    marginBottom: 16,
  },
  statsContainer: {
    marginTop: 16,
  },
  statItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 16,
    color: "#666",
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
