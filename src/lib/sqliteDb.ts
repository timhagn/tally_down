'use server'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export async function openDb() {
  try {
    const db = await open({
      filename: './tallyDown.db',
      driver: sqlite3.Database,
    })
    await db.exec(
      'CREATE TABLE IF NOT EXISTS tally_tokes (id DATE PRIMARY KEY UNIQUE DEFAULT CURRENT_DATE, numberOfTokes INT)'
    )
    return db
  } catch (err: any) {
    console.error(err)
  }
}

export async function loadTodayPuffs(): Promise<number> {
  const db = await openDb()
  if (db) {
    const result = await db.get(
      "SELECT numberOfTokes FROM tally_tokes WHERE id = date('now')"
    )
    if (result) {
      const { numberOfTokes } = result
      return numberOfTokes
    }
  }
  return 0
}

export interface TallyTokes {
  id: string
  numberOfTokes: number
}

export async function loadPastPuffs(): Promise<TallyTokes[]> {
  const db = await openDb()
  if (db) {
    const result = await db.all(
      "SELECT * FROM tally_tokes WHERE id < date('now')"
    )
    if (result) {
      return result
    }
  }
  return []
}
