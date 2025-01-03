export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    try {
      const response = await fetch('https://backend-url/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(401).json({ success: false, message: data.message || 'Login failed' });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal Server Error' ,error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}