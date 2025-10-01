import mongoose, { Mongoose, Connection } from 'mongoose';


interface GlobalMongoose {
  mongoose: {
    conn: Connection | null;
    promise: Promise<Mongoose> | null;
  };
}


declare const global: GlobalMongoose;

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}


const cached: GlobalMongoose['mongoose'] = global.mongoose ?? {
  conn: null,
  promise: null,
};


global.mongoose = cached;

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }


  const mongooseInstance = await cached.promise;
  cached.conn = mongooseInstance.connection;
  return cached.conn;
}

export default dbConnect;