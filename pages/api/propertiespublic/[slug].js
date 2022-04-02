const { propertiespublic } = require("./data.json");

export default (req, res) => {
  const ppl = propertiespublic.filter(pp => pp.slug === req.query.slug)

  if (req.method === "GET") {
    res.status(200).json(ppl)
  } else {
    res.setHeader("Allow", ["GET"])
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }
}