'use client'

import { ReactNode, useState, useEffect } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

interface QueryProviderProps {
  children: ReactNode
}

export function QueryProvider({ children }: QueryProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000,
            gcTime: 10 * 60 * 1000,
            refetchOnWindowFocus: false,
            retry: 3,
          },
        },
      }),
  )

  useEffect(() => {
    const handleAdminUpdate = (event: CustomEvent) => {
      const { type } = event.detail
      
      if (type === 'all') {
        queryClient.invalidateQueries()
      } else if (type === 'home') {
        queryClient.invalidateQueries({ queryKey: ['mainImages'] })
        queryClient.invalidateQueries({ queryKey: ['invites'] })
        queryClient.invalidateQueries({ queryKey: ['gallery'] })
        queryClient.invalidateQueries({ queryKey: ['highlights'] })
        queryClient.invalidateQueries({ queryKey: ['events'] })
        queryClient.invalidateQueries({ queryKey: ['reviews'] })
      } else if (type === 'team') {
        queryClient.invalidateQueries({ queryKey: ['team'] })
      }
    }

    window.addEventListener('admin-data-updated', handleAdminUpdate as EventListener)
    
    return () => {
      window.removeEventListener('admin-data-updated', handleAdminUpdate as EventListener)
    }
  }, [queryClient])

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
