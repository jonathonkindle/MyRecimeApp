import { type SQLiteDatabase } from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';

export interface RecipeInterface {
    title: string;
    description: string;
  }

export async function migrateDbIfNeeded(db: SQLiteDatabase) {
    // Log db for debugging
    console.log(FileSystem.documentDirectory);
    const DATABASE_VERSION = 1;

    let result = await db.getFirstAsync<{ user_version: number }>('PRAGMA user_version');
    let currentDbVersion = result?.user_version ?? 0;

    if (currentDbVersion >= DATABASE_VERSION) {
        console.log('Already on latest DB');

      return;
    }
    if (currentDbVersion === 0) {
      const result = await db.execAsync(`
        PRAGMA journal_mode = 'wal';
        CREATE TABLE recipes (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL);
        `);

      console.log(result);
      currentDbVersion = 1;
    }
    // if (currentDbVersion === 1) {
    //   Add more migrations
    // }
    await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}

export const addRecipe = async (db: SQLiteDatabase, title: string, description: string) => {
    return await db.runAsync('INSERT INTO recipes (title, description) VALUES (?,?)', title, description);
}

export const getAllRecipes = async (db: SQLiteDatabase) => {
    return await db.getAllAsync<RecipeInterface>('SELECT * FROM recipes');
    // console.log('all recipes: ', result);
}