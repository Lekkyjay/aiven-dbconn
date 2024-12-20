import { Pool } from 'pg'

const connectionString = process.env.PG_CONN
const ssl = { rejectUnauthorized: false }

export const pool = new Pool({ connectionString, ssl })