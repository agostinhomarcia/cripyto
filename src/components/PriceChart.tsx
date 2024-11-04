import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

interface Props {
  priceData: number[];
  color?: string;
}

export const PriceChart: React.FC<Props> = ({ priceData, color = '#2ecc71' }) => {
  return (
    <LineChart
      data={{
        labels: [],
        datasets: [{ data: priceData }],
      }}
      width={Dimensions.get('window').width - 32}
      height={220}
      chartConfig={{
        backgroundColor: '#fff',
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
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
      withDots={false}
      withInnerLines={false}
      withOuterLines={false}
      withHorizontalLabels={false}
    />
  );
}; 