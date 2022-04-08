// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { propertiespublic } = require("./data.json");

 const handler= (req, res) => {
  if (req.method === "GET") {
    res.status(200).json(propertiespublic)
  } else {
    res.setHeader("Allow", ["GET"])
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }
}

export default handler;