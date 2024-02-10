'use server'

import React from 'react'
import { loadPastPuffs, loadTodayPuffs, TallyTokes } from '@/lib/sqliteDb'
import AdminDashboard from '@/app/components/adminDashboard'
import PastTokes from '@/app/components/pastTokes'

export default async function AdminWrapper() {
  const todayPuffs = await loadTodayPuffs()
  const pastLoadedTokesResult = await loadPastPuffs()
  const pastTokesResult = pastLoadedTokesResult?.sort(
    (a: TallyTokes, b: TallyTokes) => Date.parse(a.id) - Date.parse(b.id),
  )

  return (
    <main className="flex flex-col items-center justify-center p-8 md:p-24">
      <AdminDashboard
        todayPuffs={todayPuffs}
        pastTokesResult={pastLoadedTokesResult}
      />
      <div className="w-full md:w-1/2">
        <PastTokes pastTokesResult={pastTokesResult} />
      </div>
    </main>
  )
}
