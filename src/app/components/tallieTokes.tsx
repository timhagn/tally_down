'use server'

import { loadPastPuffs, loadTodayPuffs } from '@/lib/sqliteDb'
import UpdateTallieTokes from '@/app/components/updateTallieTokes'
import PastTokes from '@/app/components/pastTokes'

export default async function TallieTokes() {
  const numberOfTokes = await loadTodayPuffs()
  const pastTokesResult = await loadPastPuffs()
  return (
    <div className="w-1/2">
      <UpdateTallieTokes numberOfTokes={numberOfTokes} />
      <PastTokes pastTokesResult={pastTokesResult} />
    </div>
  )
}
