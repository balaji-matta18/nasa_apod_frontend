export default async function handler(req, res) {
  try {
    const path = req.query.path?.join("/") || "";
    const backendUrl = `http://13.234.67.226:8080/api/apod/${path}`;

    const response = await fetch(backendUrl);
    const data = await response.json();

    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: "Backend unreachable" });
  }
}
