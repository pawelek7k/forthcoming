import { Db, MongoClient } from 'mongodb';

const mongoUri = process.env.MONGODB_CONNECT as string;

if (!mongoUri) {
    throw new Error('MONGODB_CONNECT environment variable is not defined');
}

let client: MongoClient | null = null;
let db: Db | null = null;

export const connectToDatabase = async (): Promise<Db> => {
    if (db) {
        return db;
    }

    try {
        if (!client) {
            client = new MongoClient(mongoUri, {
                serverSelectionTimeoutMS: 5000,
            });
        }

        await client.connect();
        db = client.db();
        console.log('Connected to MongoDB');
        return db;
    } catch (err) {
        console.error('Failed to connect to database', err);
        throw new Error('Failed to connect to MongoDB');
    }
};