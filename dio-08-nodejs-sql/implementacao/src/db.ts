import { Pool } from 'pg'

const connectionString = 'postgres://owsyafgp:8N9Fxf-DPmmoRKUwwNfjbj9PHwxwVsus@kesavan.db.elephantsql.com/owsyafgp'
const db = new Pool({ connectionString })

export default db