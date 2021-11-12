import client from "../database";

export async function getBags() {
  await client.connect();
  const db = client.db("capstone_candyshop");
  const collection = db.collection("bags");
  const data = await collection.find().toArray();
  return data;
}

//dynamic:

// export async function getBag(slug) {
//   await client.connect();
//   const db = client.db(capstone_candyshop);
//   const collection = db.collection("bags");
//   const data = await collection.findOne({ slug });
//   return data;
// }
