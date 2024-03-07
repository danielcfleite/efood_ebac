import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Restaurante } from "../types/restaurante";

type Product = {
  id: number;
  price: number;
};

type OrderResponse = {
  orderId: string;
};

type PurchasePayload = {
  products: Product[];
  delivery: {
    receiver: string;
    adress: {
      drescription: string;
      city: string;
      zipCode: string;
      number: number;
      complement: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
};

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood",
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurante[], void>({
      query: () => "restaurantes",
    }),
    purchase: builder.mutation<OrderResponse, PurchasePayload>({
      query: (body) => ({
        url: "checkout",
        method: "POST",
        body,
      }),
    }),
  }),
});

// Ignore TypeScript checking for now because we're uncertain about the response type.
export const { useGetRestaurantsQuery, usePurchaseMutation } = api;
