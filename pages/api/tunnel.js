export default function handler(req, res) {
  if (req.body !== process.env.Pass)
    throw "wrong Password!"
  const [url, method, host, path, headers] = [req.body.url, req.body.method, req.body.host, req.body.path, req.body.headers]
  try {
    const data = await fetch(url, { method, host, path, headers })
    res.status(200).json({ data })
  } catch (err) {
    res.status(500).json({ msg: err })
  }
}