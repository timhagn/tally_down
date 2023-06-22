'use server'

import { loadPastPuffs, loadTodayPuffs, TallyTokes } from '@/lib/sqliteDb'
import UpdateTallieTokes from '@/app/components/updateTallieTokes'
import PastTokes from '@/app/components/pastTokes'
import { WhatTheSmileyThinks } from '@/app/components/whatTheSmileyThinks'

export default async function TallieTokes() {
  const numberOfTokes = await loadTodayPuffs()
  const pastLoadedTokesResult = await loadPastPuffs()
  const pastTokesResult = pastLoadedTokesResult?.sort(
    (a: TallyTokes, b: TallyTokes) => Date.parse(a.id) - Date.parse(b.id)
  )
  const pastNumberOfTokes =
    pastTokesResult?.[pastTokesResult?.length - 1]?.numberOfTokes || 0
  return (
    <div className="w-full md:w-1/2">
      <UpdateTallieTokes
        numberOfTokes={numberOfTokes}
        pastNumberOfTokes={pastNumberOfTokes}
      />
      <PastTokes pastTokesResult={pastTokesResult} />
    </div>
  )
}
