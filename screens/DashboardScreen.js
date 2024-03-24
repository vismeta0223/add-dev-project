// screens/DashboardScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const DashboardScreen = () => {
  // Sample sales data
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Blue color for the line
        strokeWidth: 2, // Width of the line
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <LineChart
        data={salesData}
        width={350} // Width of the chart
        height={200} // Height of the chart
        yAxisLabel="$" // Y-axis label
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0, // No decimal places for y-axis values
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Black color for text
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Black color for labels
          style: {
            borderRadius: 16,
          },
        }}
        bezier // Smooth line
        style={styles.chart}
      />
      <View style={styles.salesContainer}>
        <Text style={styles.salesText}>Total Sales: $585</Text>
        <Text style={styles.salesText}>Today's Sales: $99</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  chart: {
    marginTop: 20,
    borderRadius: 16,
  },
  salesContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  salesText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default DashboardScreen;
