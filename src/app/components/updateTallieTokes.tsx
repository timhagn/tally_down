'use client'

import { addToDb } from '@/app/actions'
import { useState } from 'react'

export default function UpdateTallieTokes({
  numberOfTokes,
}: {
  numberOfTokes: number
}) {
  const [currentNumberOfTokes, setCurrentNumberOfTokes] =
    useState(numberOfTokes)
  return (
    <div className="text-center">
      {currentNumberOfTokes}
      <form
        action={addToDb}
        onSubmit={() => setCurrentNumberOfTokes((prev) => prev + 1)}
      >
        <button type="submit">Toked</button>
      </form>
    </div>
  )
}
