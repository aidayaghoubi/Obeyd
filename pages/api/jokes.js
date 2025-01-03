export default function handler(req, res) {
  const jokes = [
    { id: 1, content: "Why don't scientists trust atoms? Because they make up everything!" },
    { id: 2, content: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
    { id: 3, content: "Why don't skeletons fight each other? They don't have the guts." },
  ];

  if (req.method === 'GET') {
    res.status(200).json(jokes);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
