import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function initializeDatabase() {
  const dbPath = join(__dirname, 'chemical_supply.db');
  
  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database
  });

  const initSql = await fs.readFile(join(__dirname, 'init.sql'), 'utf-8');
  await db.exec(initSql);

  return db;
}