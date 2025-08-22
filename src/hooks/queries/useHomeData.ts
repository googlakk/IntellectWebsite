import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'

import { Api } from '@/services'
import { HomeTypes } from '@/types/home.interface'
import { TeamTypes } from '@/types/team.interface'

export const useMainImages = () => {
  const locale = useLocale()

  return useQuery<HomeTypes.MainImage[]>({
    queryKey: ['mainImages', locale],
    queryFn: async () => {
      const response = await Api.home.MainImageGET(locale)

      return response.data.data
    },
    staleTime: 10 * 60 * 1000,
  })
}

export const useInvites = () => {
  const locale = useLocale()

  return useQuery<HomeTypes.Invite[]>({
    queryKey: ['invites', locale],
    queryFn: async () => {
      const response = await Api.home.InviteHomeGET(locale)

      return response.data.data
    },
    staleTime: 10 * 60 * 1000,
  })
}

export const useGallery = () => {
  const locale = useLocale()

  return useQuery<HomeTypes.Gallery[]>({
    queryKey: ['gallery', locale],
    queryFn: async () => {
      const response = await Api.home.GalleryHomeGET(locale)

      return response.data.data
    },
    staleTime: 10 * 60 * 1000,
  })
}

export const useHighlights = () => {
  const locale = useLocale()

  return useQuery<HomeTypes.HighLights[]>({
    queryKey: ['highlights', locale],
    queryFn: async () => {
      const response = await Api.home.HighlightsHomeGET(locale)

      return response.data.data
    },
    staleTime: 10 * 60 * 1000,
  })
}

export const useTeam = () => {
  const locale = useLocale()

  return useQuery<TeamTypes.ItemResponse>({
    queryKey: ['team', locale],
    queryFn: async () => {
      const response = await Api.team.TeamGET(locale)

      return response.data
    },
    staleTime: 15 * 60 * 1000,
  })
}

export const useEvents = () => {
  const locale = useLocale()

  return useQuery<HomeTypes.EventItem[]>({
    queryKey: ['events', locale],
    queryFn: async () => {
      const response = await Api.home.EventGET(locale)

      return response.data.data
    },
    staleTime: 5 * 60 * 1000,
  })
}

export const useReviews = () => {
  const locale = useLocale()

  return useQuery<HomeTypes.ReviewItemResponse>({
    queryKey: ['reviews', locale],
    queryFn: async () => {
      const response = await Api.home.ReviewsGET(locale)

      return response.data
    },
    staleTime: 15 * 60 * 1000,
  })
}

export const useCombinedHomeData = () => {
  const mainImages = useMainImages()
  const invites = useInvites()
  const gallery = useGallery()
  const highlights = useHighlights()
  const team = useTeam()
  const events = useEvents()
  const reviews = useReviews()

  const isLoading = mainImages.isLoading || invites.isLoading || gallery.isLoading
  const isError = mainImages.isError || invites.isError || gallery.isError ||
                  highlights.isError || team.isError || events.isError || reviews.isError

  return {
    mainImages: mainImages.data,
    invites: invites.data,
    gallery: gallery.data,
    highlights: highlights.data,
    team: team.data,
    events: events.data,
    reviews: reviews.data,
    isLoading,
    isError,
    teamLoading: team.isLoading,
  }
}
