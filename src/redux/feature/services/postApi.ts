import { Post } from "@/utlls/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Posts", "Todos"],
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], void>({
      query: () => `posts`,
      providesTags: [{ type: "Posts", id: "LIST" }],
    }),
    getPostsById: builder.query<Post[], void>({
      query: () => `posts`,
    }),
    deletePost: builder.mutation<any, { id: number }>({
      query: ({ id }) => ({ method: "DELETE", url: `posts/${id}` }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),
    updatePost: builder.mutation<any, Partial<Post>>({
      query: ({ id, ...patch }) => ({
        method: "PATCH",
        url: `posts/${id}`,
        body: patch,
      }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postApi;
