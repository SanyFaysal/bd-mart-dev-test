import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    // baseUrl: `${process.env.NEXT_APP_DEV_URL}`,
    baseUrl: "http://localhost:8080/api/v1",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
