export default async function handler(req, res) {
  if (req.body !== process.env.Pass)
    throw "wrong Password!"
  const [url, method, host, path, headers] = [req.body.url, req.body.method, req.body.host, req.body.path, req.body.headers]
  try {
    const data = await fetch(url, { method, host, path, headers })
    if (data.status !== "200")
      throw "status is not 200!"
    res.status(200).json(await data.json())
  } catch (err) {
    res.status(500).json({ msg: err })
  }
}