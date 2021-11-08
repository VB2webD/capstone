import client from "../../utils/database";

export default async function handler(req, res) {
  try {
    await client.connect();
    const db = client.db("capstone_candyshop");
    const collection = db.collection("shop_inventory");

    switch (req.method) {
      case "GET":
        const inventory = await collection.find().toArray();
        res.status(200).json({inventory});
        break;
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong!" });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
