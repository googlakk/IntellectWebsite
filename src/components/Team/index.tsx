'use client'

import React from 'react'
import WorkSpeakers from '@/components/Home/WorkSpeakers'
import { Api } from '@/services'
import { TeamTypes } from '@/types/team.interface'

import Loader from '../Common/Loader'

export default function Team() {
  const [team, setTeam] = React.useState<TeamTypes.ItemResponse | null>(null)
  const [teamLoading, setTeamLoading] = React.useState(false)

  const loadTeam = async () => {
    setTeamLoading(true)
    try {
      const response = await Api.team.TeamGET()

      setTeam(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setTeamLoading(false)
    }
  }

  React.useEffect(() => {
    loadTeam()
  }, [])

  if (teamLoading) {
    return <Loader/>
  }

  return (
    <WorkSpeakers team={team}/>
  )
}
