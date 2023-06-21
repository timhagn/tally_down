'use client'

import { useState } from 'react'
import { addToDb } from '@/app/actions'
import Tallies from '@/app/components/tallies'
import { handrawn } from '@/lib/fonts'

export default function UpdateTallieTokes({
  numberOfTokes,
}: {
  numberOfTokes: number
}) {
  const [currentNumberOfTokes, setCurrentNumberOfTokes] =
    useState(numberOfTokes)
  return (
    <div className="text-center">
      <Tallies
        number={currentNumberOfTokes}
        className={handrawn.className}
        textSize={42}
      />
      <form
        action={addToDb}
        onSubmit={() => setCurrentNumberOfTokes((prev) => prev + 1)}
      >
        <button type="submit">Toked</button>
      </form>
    </div>
  )
}
