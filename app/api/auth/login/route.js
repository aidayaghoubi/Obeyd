import connectMongoDB from "@/libs/mongodb";
import { User } from "../../../../models/user/user";

import cookieSession from "cookie-session";

export default async function handler(req, res) {
  await connectMongoDB();

  // Configure the session middleware
  const session = cookieSession({
    name: "session",
    keys: [process.env.SESSION_SECRET || "default_secret"], // Change this in production
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  // Attach session to the request
  session(req, res, () => {});

  if (req.method === "POST") {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      const user = await User.findOne({ username });

      if (!user || !(await user.matchPassword(password))) {
        return res.status(401).json({ error: "Invalid username or password" });
      }

      // Store user info in the session
      req.session.user = { id: user._id, username: user.username };

      res.status(200).json({ message: "Login successful", user: req.session.user });
    } catch (error) {
      res.status(500).json({ error: `Server error ${error}` });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
