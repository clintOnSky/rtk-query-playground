import { StyleSheet, Text, View } from "react-native";
import React from "react";

const EmptyContent = () => {
  return (
    <View style={styles.container}>
      <Text>There is no data available</Text>
    </View>
  );
};

export default EmptyContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
