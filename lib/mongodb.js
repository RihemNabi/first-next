import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri) {
  throw new Error(" URI MongoDB non définie dans .env ou variables Vercel");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  //  cache global uniquement en développement
  if (!global._mongoClient) {
    global._mongoClient = new MongoClient(uri, options);
    global._mongoClientPromise = global._mongoClient.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // En production (OK sur Vercel)
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
