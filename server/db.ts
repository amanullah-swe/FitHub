// db.ts
import { promises } from 'dns';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const MONGODB_URI: string = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env ' +
        'Refer to the documentation for instructions on setting up environment variables.'
    );
}

let cachedDb: any | null = null;

export default async function connect(): Promise<any> {
    if (cachedDb) {
        console.log('Reusing cached database connection');
        return cachedDb;
    }

    try {
        const db = await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');
        cachedDb = db;
        return db;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Terminate the process if connection fails
    }
}
