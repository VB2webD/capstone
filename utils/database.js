import { MongoClient } from "mongodb";

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}
const client = new MongoClient(process.env.dbAccess, options);

export default client;