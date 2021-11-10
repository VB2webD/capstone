import client from "../../utils/database";

export default async function handler(req, res) {
  try {
    res.status(200).json(await getBags());
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong!" });
  } finally {
    await client.close();
  }
}
