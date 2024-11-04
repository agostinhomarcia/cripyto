import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface Props {
  onSearch: (text: string) => void;
}

export const SearchBar: React.FC<Props> = ({ onSearch }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search cryptocurrencies..."
        onChangeText={onSearch}
        placeholderTextColor="#666"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  input: {
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
});
