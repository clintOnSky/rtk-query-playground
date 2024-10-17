import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Link href="/get-all-posts" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Get All Posts</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/delete-by-id" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Delete Post</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/create-post" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Create Posts</Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: "center",
    gap: 10,
  },
  button: {
    padding: 10,
    backgroundColor: "#d3d3d3",
  },
});
