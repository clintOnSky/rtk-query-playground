import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<any, void>({
      query: () => `posts`,
    }),
  }),
});

export const { useGetAllPostsQuery } = postApi;
