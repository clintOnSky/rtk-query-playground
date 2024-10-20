import { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios from "axios";
import type { AxiosRequestConfig, AxiosError } from "axios";

axios.interceptors.request.use(
  (config) => {
    console.log("Request payload", config.data);
    return config;
  },
  (error) => {
    console.log("Request setup error: ", error.message);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log("🚀 ~ response:", response.data);
    return response;
  },
  (error) => {
    console.log("🚀 ~ error:", error?.response && error.response.data);
    return Promise.reject(error);
  }
);

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers }) => {
    try {
      const response = await axios.request({
        url: baseUrl + url,
        method: method ?? "get",
        data,
        params,
        headers,
      });

      // Check for non-2xx status code indicating an error
      if (response.status < 200 || response.status >= 300) {
        console.error("Non-2xx response status", response.status);
        throw new Error(response.statusText || "An error occurred.");
      }

      return { data: response?.data || response };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
