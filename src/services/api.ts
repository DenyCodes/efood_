import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Cardapio } from '../components/pages/Product'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood/restaurantes/{id}'
  }),
  endpoints: (builder) => ({
    getFeatureCardapio: builder.query<Cardapio, void>({
      query: () => 'restaurantes'
    })
  })
})

export const { useGetFeatureCardapioQuery } = api

export default api
