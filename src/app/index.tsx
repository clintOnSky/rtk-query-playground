import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useGetAllPostsQuery } from "../redux/feature/services/postApi";

const index = () => {
  const { data, isLoading } = useGetAllPostsQuery();
  console.log("🚀 ~ index ~ data:", data);
  return isLoading ? (
    <View style={styles.loader}>
      <ActivityIndicator />
    </View>
  ) : (
    <ScrollView>
      <Text>{JSON.stringify(data)}</Text>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
