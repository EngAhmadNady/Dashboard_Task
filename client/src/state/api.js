import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Transactions",
    "Sales",
    "Dashboard",
  ],
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getDashboard: builder.query({
      query: () => `general/dashboard`,
      providesTags: ["Dashboard"],
    }),
    getTransactions: builder.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: {
          page,
          pageSize,
          sort,
          search,
        },
      }),
      providesTags: ["Transactions"],
    }),
    getSales: builder.query({
      query: () => `sales/sales`,
      providesTags: ["Sales"],
    })
  }),
});

export const {
  useGetUserByIdQuery,
  useGetDashboardQuery,
  useGetTransactionsQuery,
  useGetSalesQuery,
} = api;
