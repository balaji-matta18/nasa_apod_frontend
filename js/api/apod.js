export default async function handler(req, res) {
  try {
    const response = await fetch("http://13.234.67.226:8080/apod");
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "Backend unreachable" });
  }
}
