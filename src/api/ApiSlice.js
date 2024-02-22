/** @format */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SERVER_BASE_URL}`,
  }),
  tagTypes: ['Pizze'],
  endpoints: builder => ({
    /* PIZZE API */

    getPizze: builder.query({
      query: () => '/pizze',
      providesTags: ['Pizze'],
    }),
    getPizzeByCategory: builder.query({
      query: category => `/pizze/category/${category}`,
      providesTags: ['Pizze'],
    }),
    getPizzeById: builder.query({
      query: id => `/pizze/${id}`,
      providesTags: ['Pizze'],
    }),
    addPizze: builder.mutation({
      query: pizze => ({
        headers: {
          'Content-Type': 'application/json',
        },
        url: '/pizze/create',
        method: 'POST',
        body: pizze,
      }),
      invalidatesTags: ['Pizze'],
    }),
    updatePizze: builder.mutation({
      query: (pizze, id) => ({
        url: `/pizze/update/:${id}`,
        method: 'PATCH',
        body: pizze,
      }),
      invalidatesTags: ['Pizze'],
    }),
    deletePizze: builder.mutation({
      query: ({ id }) => ({
        url: `/pizze/delete/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Pizze'],
    }),

    /* INGREDIENTS API */

    getIngredients: builder.query({
      query: () => '/ingredients',
      providesTags: ['Ingredients'],
    }),
    getIngredientsById: builder.query({
      query: id => `/ingredients/${id}`,
      providesTags: ['Ingredients'],
    }),
    addIngredients: builder.mutation({
      query: ingredients => ({
        headers: {
          'Content-Type': 'application/json',
        },
        url: '/ingredients/create',
        method: 'POST',
        body: ingredients,
      }),
      invalidatesTags: ['Ingredients'],
    }),
    updateIngredients: builder.mutation({
      query: (ingredients, id) => ({
        url: `/ingredients/update/:${id}`,
        method: 'PATCH',
        body: ingredients,
      }),
      invalidatesTags: ['Ingredients'],
    }),
    deleteIngredients: builder.mutation({
      query: ({ id }) => ({
        url: `/ingredients/delete/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Ingredients'],
    }),

    /* FRIEDS API */

    getFrieds: builder.query({
      query: () => '/frieds',
      providesTags: ['Frieds'],
    }),

    getFriedsById: builder.query({
      query: id => `/frieds/${id}`,
      providesTags: ['Frieds'],
    }),
    addFrieds: builder.mutation({
      query: frieds => ({
        headers: {
          'Content-Type': 'application/json',
        },
        url: '/frieds/create',
        method: 'POST',
        body: frieds,
      }),
      invalidatesTags: ['Frieds'],
    }),
    updateFrieds: builder.mutation({
      query: (frieds, id) => ({
        url: `/frieds/update/:${id}`,
        method: 'PATCH',
        body: frieds,
      }),
      invalidatesTags: ['Frieds'],
    }),
    deleteFrieds: builder.mutation({
      query: ({ id }) => ({
        url: `/frieds/delete/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Frieds'],
    }),

    /* DRINKS API */

    getDrinks: builder.query({
      query: () => '/drinks',
      providesTags: ['Drinks'],
    }),

    getDrinksById: builder.query({
      query: id => `/drinks/${id}`,
      providesTags: ['Drinks'],
    }),
    addDrinks: builder.mutation({
      query: drinks => ({
        headers: {
          'Content-Type': 'application/json',
        },
        url: '/drinks/create',
        method: 'POST',
        body: drinks,
      }),
      invalidatesTags: ['Drinks'],
    }),
    updateDrinks: builder.mutation({
      query: (drinks, id) => ({
        url: `/drinks/update/:${id}`,
        method: 'PATCH',
        body: drinks,
      }),
      invalidatesTags: ['Drinks'],
    }),
    deleteDrinks: builder.mutation({
      query: ({ id }) => ({
        url: `/drinks/delete/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Drinks'],
    }),

    getAdv: builder.query({
      query: () => '/adv',
    }),
  }),
});

export const {
  /* PIZZA EXPORT */
  useGetPizzeQuery,
  useAddPizzeMutation,
  useDeletePizzeMutation,
  useUpdatePizzeMutation,
  useGetPizzeByCategoryQuery,
  useGetPizzeByIdQuery,

  /* INGREDIENTS EXPORT */
  useLazyGetIngredientsQuery,
  useGetIngredientsByIdQuery,
  useAddIngredientsMutation,
  useUpdateIngredientsMutation,
  useDeleteIngredientsMutation,

  /* FRIEDS EXPORT */
  useGetFriedsByIdQuery,
  useGetFriedsQuery,
  useAddFriedsMutation,
  useUpdateFriedsMutation,
  useDeleteFriedsMutation,

  /* DRINKS EXPORT */

  useGetDrinksQuery,
  useGetDrinksByIdQuery,
  useAddDrinksMutation,
  useUpdateDrinksMutation,
  useDeleteDrinksMutation,

  useGetAdvQuery,
} = apiSlice;
