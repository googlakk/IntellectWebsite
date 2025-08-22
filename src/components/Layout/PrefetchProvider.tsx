'use client'

import { useEffect } from 'react'

import { useQueryClient } from '@tanstack/react-query'
import { useLocale } from 'next-intl'

import { Api } from '@/services'

export default function PrefetchProvider() {
  const queryClient = useQueryClient()
  const locale = useLocale()

  useEffect(() => {
    const prefetchCriticalData = async () => {

      try {
        await Promise.all([
          queryClient.prefetchQuery({
            queryKey: ['mainImages', locale],
            queryFn: async () => {
              const response = await Api.home.MainImageGET(locale)

              return response.data.data
            },
            staleTime: 10 * 60 * 1000,
          }),
          queryClient.prefetchQuery({
            queryKey: ['invites', locale],
            queryFn: async () => {
              const response = await Api.home.InviteHomeGET(locale)

              return response.data.data
            },
            staleTime: 10 * 60 * 1000,
          }),
        ])
      } catch (error) {

        console.warn('Prefetch failed:', error)
      }
    }

    prefetchCriticalData()
  }, [queryClient, locale])

  return null
}
