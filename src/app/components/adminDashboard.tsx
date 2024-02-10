'use client'

import { TallyTokes } from '@/lib/sqliteDb'
import React, { useCallback, useState } from 'react'
import { WhatTheSmileyThinks } from '@/app/components/whatTheSmileyThinks'
import { calculateMedian } from '@/lib/meanUtils'

export default function AdminDashboard({
  todayPuffs,
  pastTokesResult,
}: {
  todayPuffs: Omit<TallyTokes, 'id'> //TallyTokes
  pastTokesResult: TallyTokes[]
}) {
  // const { backfillTokes, sendResetDay } = useTallyDownProgram()
  // const { connection } = useConnection()
  // const { publicKey } = useWallet()
  const [programState, setProgramState] = useState<any>()
  const [walletBalance, setWalletBalance] = useState<number>()

  const onBackfillClick = () => {}
  //   useCallback(async () => {
  //
  //   const oldTokes = convertOldTokes(pastTokesResult)
  //   const oldTodayPuffs = processOldTodayPuffs(todayPuffs)
  //   const currentProgramState = await backfillTokes(oldTodayPuffs, oldTokes)
  //   if (currentProgramState) {
  //     setProgramState(currentProgramState)
  //   }
  // }, [backfillTokes, pastTokesResult, todayPuffs])

  const onResetDayClick = () => {}
  //   useCallback(async () => {
  //   const currentProgramState = await sendResetDay()
  //   if (currentProgramState) {
  //     setProgramState(currentProgramState)
  //   }
  // }, [sendResetDay])

  return (
    <>
      <h1 className="text-2xl font-bold text-center">
        Click Backfill to import tokes of {pastTokesResult.length} days from DB
      </h1>
      <button
        type="submit"
        className="btn btn-blue mt-8"
        onClick={onBackfillClick}
      >
        Backfill
      </button>
      <p className="mt-4">or</p>
      <button
        type="submit"
        className="btn btn-blue mt-4"
        onClick={onResetDayClick}
      >
        Reset Day
      </button>
      {programState?.tokes?.length && (
        <>
          <h2 className="font-bold my-6">
            Success! Backfilled {programState.tokes.length} days of tokes!
          </h2>
          <WhatTheSmileyThinks
            numberOfTokes={0}
            pastNumberOfTokes={100}
            className="text-3xl text-center"
          />
        </>
      )}
      {programState?.currentTokeCount === 0 && (
        <>
          <h2 className="font-bold my-6">
            Success! Reset the days toke count!
          </h2>
          <WhatTheSmileyThinks
            numberOfTokes={0}
            pastNumberOfTokes={100}
            className="text-3xl text-center"
          />
        </>
      )}
    </>
  )
}
