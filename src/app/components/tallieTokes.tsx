'use server'

import { loadTodayTokes } from '@/lib/sqliteDb'
import UpdateTallieTokes from '@/app/components/updateTallieTokes'

export default async function TallieTokes() {
  const numberOfTokes = await loadTodayTokes()
  return (
    <div>
      <UpdateTallieTokes numberOfTokes={numberOfTokes} />
    </div>
  )
}
