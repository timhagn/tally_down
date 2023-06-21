'use server'

import { openDb } from '@/lib/sqliteDb'

export async function addToDb() {
  const db = await openDb()
  if (db) {
    await db.exec(
      "UPDATE tally_tokes SET numberOfTokes = numberOfTokes + 1 WHERE id = date('now')"
    )
  }
}
