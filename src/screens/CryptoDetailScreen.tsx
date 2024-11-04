import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CryptoData } from "../types/crypto";

interface Props {
  crypto: CryptoData;
  onClose: () => void;
}

export const CryptoDetailScreen: React.FC<Props> = ({ crypto, onClose }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{crypto.name}</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.content}>
        <Text style={styles.price}>${crypto.current_price.toFixed(2)}</Text>
        <Text
          style={[
            styles.change,
            { color: crypto.price_change_percentage_24h > 0 ? "green" : "red" },
          ]}
        >
          {crypto.price_change_percentage_24h.toFixed(2)}%
        </Text>

        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Symbol:</Text>
            <Text style={styles.infoValue}>{crypto.symbol.toUpperCase()}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Market Cap:</Text>
            <Text style={styles.infoValue}>
              ${(crypto.market_cap / 1000000).toFixed(2)}M
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  placeholder: {
    width: 40, // Para manter o título centralizado
  },
  content: {
    padding: 16,
  },
  price: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  change: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 24,
  },
  infoContainer: {
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    padding: 16,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  infoLabel: {
    fontSize: 16,
    color: "#666",
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "500",
  },
});
