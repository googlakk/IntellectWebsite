import { useCallback } from 'react'

import { useQueryClient } from '@tanstack/react-query'

export const useCacheInvalidation = () => {
  const queryClient = useQueryClient()

  const invalidateAllData = useCallback(() => {
    queryClient.invalidateQueries()
  }, [queryClient])

  const invalidateHomeData = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: ['mainImages'] })
    queryClient.invalidateQueries({ queryKey: ['invites'] })
    queryClient.invalidateQueries({ queryKey: ['gallery'] })
    queryClient.invalidateQueries({ queryKey: ['highlights'] })
    queryClient.invalidateQueries({ queryKey: ['events'] })
    queryClient.invalidateQueries({ queryKey: ['reviews'] })
  }, [queryClient])

  const invalidateTeamData = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: ['team'] })
  }, [queryClient])

  return {
    invalidateAllData,
    invalidateHomeData,
    invalidateTeamData,
  }
}
