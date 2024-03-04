import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Restaurante } from "../types/restaurante";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood",
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurante[], void>({
      query: () => "restaurantes",
    }),
  }),
});

export const { useGetRestaurantsQuery } = api;
