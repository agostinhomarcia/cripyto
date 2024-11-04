import React from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

interface Props {
  data: number[];
  color?: string;
}

export const PriceChart: React.FC<Props> = ({ data, color = "#2ecc71" }) => {
  return (
    <LineChart
      data={{
        labels: [],
        datasets: [{ data }],
      }}
      width={Dimensions.get("window").width - 32}
      height={220}
      chartConfig={{
        backgroundColor: "#fff",
        backgroundGradientFrom: "#fff",
        backgroundGradientTo: "#fff",
        decimalPlaces: 2,
        color: () => color,
        style: {
          borderRadius: 16,
        },
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
};
