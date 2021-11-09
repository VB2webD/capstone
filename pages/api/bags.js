import client from "../../utils/database";

export default async function handler(req, res) {
  try {
    await client.connect();
    const db = client.db("capstone_candyshop");
    const collection = db.collection("bags");

    const inventory = await collection.find().toArray();
    res.status(200).json(inventory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong!" });
  } finally {
    await client.close();
  }
}
