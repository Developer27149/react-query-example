// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { IWallpaperResp } from "../../types/wallpaper";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IWallpaperResp>
) {
  const { keyword = "code" } = req.body;

  const url = `https://api.unsplash.com/search/photos/?client_id=${process.env.UNSPLASH_ID}&query=${keyword}&lang=zh&orientation=landscape`;
  const { data } = await axios.get<IWallpaperResp>(url);
  res.status(200).json(data);
}
