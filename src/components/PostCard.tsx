import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Post } from "@/utlls/types";
import { Ionicons } from "@expo/vector-icons";
import {
  useDeletePostMutation,
  useUpdatePostMutation,
} from "../redux/feature/services/postApi";

type Props = {
  post: Post;
};
const PostCard = ({ post }: Props) => {
  const [deletePost, deletePostResult] = useDeletePostMutation();
  const [updatePost, updatePostResult] = useUpdatePostMutation();
  updatePostResult?.data &&
    console.log("🚀 ~ PostCard ~ data:", updatePostResult.data);

  const handleDelete = async () => {
    await deletePost({ id: post.id });
  };
  const handleUpdatePost = async () => {
    await updatePost({ title: "Updated" });
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text numberOfLines={1}>{post.title}</Text>
        <Text numberOfLines={1}>{post.body}</Text>
      </View>
      {deletePostResult.isLoading ? (
        <ActivityIndicator size={20} color="red" />
      ) : (
        <TouchableOpacity onPress={handleDelete}>
          <Ionicons name="pencil-sharp" size={20} color="red" />
        </TouchableOpacity>
      )}
      {deletePostResult.isLoading ? (
        <ActivityIndicator size={20} color="red" />
      ) : (
        <TouchableOpacity onPress={handleDelete}>
          <Ionicons name="trash-bin-sharp" size={20} color="red" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: "center",
    elevation: 5,
    backgroundColor: "white",
    gap: 10,
  },
});
