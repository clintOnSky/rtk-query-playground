import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { useGetAllPostsQuery } from "../redux/feature/services/postApi";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorContent from "../components/ErrorContent";
import EmptyContent from "../components/EmptyContent";
import PostCard from "../components/PostCard";

const GetAllPosts = () => {
  const { data, isLoading, isError } = useGetAllPostsQuery();
  console.log("🚀 ~ GetAllPosts ~ isLoading:", isLoading);
  return isLoading ? (
    <LoadingIndicator />
  ) : isError ? (
    <ErrorContent />
  ) : data && data?.length > 0 ? (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={data}
      renderItem={({ item }) => <PostCard post={item} />}
    />
  ) : (
    <EmptyContent />
  );
};

export default GetAllPosts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    paddingHorizontal: 24,
    gap: 20,
  },
});
