import { CryptoScreen } from "@/screens/CryptoScreen";
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Crypto Market</Text>
      </View>
      <StatusBar barStyle="dark-content" />
      <CryptoScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 16,
    backgroundColor: "#f8f9fa",
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#212529",
    textAlign: "center",
  },
});
