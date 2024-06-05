import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Cardapio } from '../components/pages/Product'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeatureCardapio: builder.query<Cardapio, void>({
      query: () => 'restaurantes'
    })
  })
})

export const { useGetFeatureCardapioQuery } = api

export default api
