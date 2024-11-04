import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { CryptoData } from "../types/crypto";

interface Props {
  crypto: CryptoData;
}

export const CryptoItem: React.FC<Props> = ({ crypto }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: crypto.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{crypto.name}</Text>
        <Text style={styles.symbol}>{crypto.symbol.toUpperCase()}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${crypto.current_price.toFixed(2)}</Text>
        <Text
          style={[
            styles.change,
            { color: crypto.price_change_percentage_24h > 0 ? "green" : "red" },
          ]}
        >
          {crypto.price_change_percentage_24h.toFixed(2)}%
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  symbol: {
    fontSize: 14,
    color: "#666",
  },
  priceContainer: {
    alignItems: "flex-end",
    marginRight: 16,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  change: {
    fontSize: 14,
  },
});
