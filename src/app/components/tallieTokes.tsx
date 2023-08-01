'use server'

import { loadPastPuffs, loadTodayPuffs, TallyTokes } from '@/lib/sqliteDb'
import UpdateTallieTokes from '@/app/components/updateTallieTokes'
import PastTokes from '@/app/components/pastTokes'
import { calculateMedian } from '@/lib/meanUtils'

export default async function TallieTokes() {
  const { numberOfTokes, lastTokeAt } = await loadTodayPuffs()
  const pastLoadedTokesResult = await loadPastPuffs()
  const pastTokesResult = pastLoadedTokesResult?.sort(
    (a: TallyTokes, b: TallyTokes) => Date.parse(a.id) - Date.parse(b.id),
  )
  // const pastNumberOfTokes =
  //   pastTokesResult?.[pastTokesResult?.length - 1]?.numberOfTokes || 0
  const medianTokes = calculateMedian(pastTokesResult)
  return (
    <div className="w-full md:w-1/2">
      <UpdateTallieTokes
        numberOfTokes={numberOfTokes}
        pastNumberOfTokes={medianTokes}
        lastTokeAt={lastTokeAt}
      />
      <PastTokes pastTokesResult={pastTokesResult} />
    </div>
  )
}
