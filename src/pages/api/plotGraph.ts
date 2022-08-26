import { fakeDataGenerator } from "@/faker-data/PlotGraph";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await fakeDataGenerator()
  res.json({
    ...data
  })
}