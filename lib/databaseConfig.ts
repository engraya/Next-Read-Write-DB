import mongoose, { Connection } from 'mongoose';

interface ConnectionObject {
    isConnected: number | boolean;
}

const connection: ConnectionObject = {
    isConnected: false, // Initialize isConnected here
};

async function connect() {
    if (connection.isConnected) {
        return;
    }
    if (mongoose.connections.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState;
        if (connection.isConnected === 1) {
            return;
        }
        await mongoose.disconnect();
    }
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
    if (connection.isConnected) {
        if (process.env.NODE_ENV === 'production') {
            await mongoose.disconnect();
            connection.isConnected = false;
        }
    }
}

const databaseConfig = { connect, disconnect };

export default databaseConfig;
