import client from "../database";

export async function getBags() {
  await client.connect();
  const db = client.db("capstone_candyshop");
  const collection = db.collection("bags");
  const data = await collection.find().toArray();
  return data;
}

export async function getItems() {
  await client.connect();
  const db = client.db("capstone_candyshop");
  const collection = db.collection("items");
  const data = await collection.find().toArray();
  return data;
}

// For dynamic Routes:

export async function getBag(input) {
  await client.connect();
  const db = client.db("capstone_candyshop");
  const collection = db.collection("bags");
  const data = await collection.findOne({ slug: `${input}` });
  return data;
}

export async function getItem(input) {
  await client.connect();
  const db = client.db("capstone_candyshop");
  const collection = db.collection("items");
  const data = await collection.findOne({ slug: `${input}` });
  return data;
}
