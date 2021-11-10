import client from "../database";

export default async function getBags() {
  await client.connect();
  const db = client.db("capstone_candyshop");
  const collection = db.collection("bags");
  const data = await collection.find().toArray();
  return data;
}
