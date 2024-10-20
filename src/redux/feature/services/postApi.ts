import { axiosBaseQuery } from "@/utlls/api";
import { Post } from "@/utlls/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Posts", "Todos"],
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], void>({
      query: () => ({ url: `posts` }),
      providesTags: [{ type: "Posts", id: "LIST" }],
    }),
    getPostsById: builder.query<Post[], void>({
      query: () => ({ url: `posts` }),
    }),
    deletePost: builder.mutation<any, { id: number }>({
      query: ({ id }) => ({ method: "delete", url: `posts/${id}` }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),
    updatePost: builder.mutation<any, Partial<Post>>({
      query: ({ id, ...patch }) => ({
        method: "patch",
        url: `posts/${id}`,
        data: patch,
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
