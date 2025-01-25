import { User } from "../../../../models/user/user";
import connectMongoDB from "@/libs/mongodb";


export default async function handler(req, res) {
  await connectMongoDB();

  if (req.method === "POST") {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      const userExists = await User.findOne({ username });
      if (userExists) {
        return res.status(400).json({ error: "User already exists" });
      }

      const user = await User.create({ username, password });
      res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
      res.status(500).json({ error: `Server error ${error}` });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
