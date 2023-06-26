import { TallyTokes } from '@/lib/sqliteDb'
import Tallies from '@/app/components/tallies'
import { handrawn } from '@/lib/fonts'
import PastTokeMeanAndMedian from '@/app/components/pastTokeMeanAndMedian'

export default function PastTokes({
  pastTokesResult,
}: {
  pastTokesResult: TallyTokes[]
}) {
  if (!pastTokesResult.length) {
    return null
  }
  return (
    <div className="mt-10 pt-8 border-t border-gray-500 w-full">
      <h2 className="text-lg font-bold underline mb-2">
        Past puff results <PastTokeMeanAndMedian pastTokes={pastTokesResult} />:
      </h2>
      {pastTokesResult.map(({ id, numberOfTokes }) => {
        const pastDate = new Date(id).toLocaleDateString('en', {
          dateStyle: 'long',
          formatMatcher: 'best fit',
        })
        return (
          <div key={id}>
            {pastDate}:{` `}
            <Tallies
              number={numberOfTokes}
              className={`${handrawn.className} inline-block -skew-x-12`}
              textSize={20}
            />{' '}
            <span className="text-xs text-gray-400">({numberOfTokes})</span>
          </div>
        )
      })}
    </div>
  )
}
