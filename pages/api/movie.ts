import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method === 'POST') {
    // TODO check if every field has a propper value
    await axios.post('http://localhost:3001/movies', req.body.movie)
  }
  res.status(200).json({ message: 'Success' })
}

export default handler