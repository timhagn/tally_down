'use client'

import { useState } from 'react'
import { addToDb } from '@/app/actions'
import Tallies from '@/app/components/tallies'
import { handrawn } from '@/lib/fonts'
import { WhatTheSmileyThinks } from '@/app/components/whatTheSmileyThinks'

export default function UpdateTallieTokes({
  numberOfTokes,
  pastNumberOfTokes,
}: {
  numberOfTokes: number
  pastNumberOfTokes: number
}) {
  const [currentNumberOfTokes, setCurrentNumberOfTokes] =
    useState(numberOfTokes)
  return (
    <div className="text-center">
      {currentNumberOfTokes ? (
        <Tallies
          number={currentNumberOfTokes}
          className={`${handrawn.className} -skew-x-12`}
          textSize={42}
        />
      ) : (
        <div className={`text-[42px]`}>(Don&apos;t) start to puff ; )</div>
      )}
      <form
        action={addToDb}
        onSubmit={() => setCurrentNumberOfTokes((prev) => prev + 1)}
      >
        <button type="submit" className="btn btn-blue mt-3">
          Puffed one
        </button>
      </form>
      <WhatTheSmileyThinks
        numberOfTokes={currentNumberOfTokes}
        pastNumberOfTokes={pastNumberOfTokes}
        className="text-3xl text-center my-10"
      />
    </div>
  )
}
