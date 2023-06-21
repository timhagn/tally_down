'use server'

import { openDb } from '@/lib/sqliteDb'

export async function addToDb() {
  const db = await openDb()
  if (db) {
    // TODO: INSERT or UPDATE
    await db.exec(
      "UPDATE tally_tokes SET numberOfTokes = numberOfTokes + 1 WHERE id = date('now')"
    )
  }
}
