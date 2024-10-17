import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ErrorContent = () => {
  return (
    <View style={styles.container}>
      <Text>An error occured</Text>
    </View>
  );
};

export default ErrorContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
