'use server'

import { openDb } from '@/lib/sqliteDb'

export async function addToDb() {
  const db = await openDb()
  if (db) {
    await db.exec(
      "INSERT INTO tally_tokes (id, numberOfTokes) VALUES(date('now', 'start of month'), 1) ON CONFLICT(id) DO UPDATE SET numberOfTokes = numberOfTokes + 1"
    )
  }
}
