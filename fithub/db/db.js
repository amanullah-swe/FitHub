// db.js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    );
}


async function connect() {
    const db = await mongoose.connect(MONGODB_URI);
    console.log("connected");
    return;
}

export default connect;
