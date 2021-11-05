import { client } from "../../../utils/database";

export default async function handler(request, response) {
  try {
    await client.connect();
    const db = client.db("capstone_candyshop");
    const collection = db.collection("shop_inventory");

    switch (request.method) {
      case "GET":
        const inventory = await collection.find("bags").toArray();
        response.status(200).json(inventory);

        break;
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Something went wrong!" });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
