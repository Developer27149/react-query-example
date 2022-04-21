import axios from "axios";
import { IWallpaperResp } from "../types/wallpaper";

export const searchImgByKeyword = async (
  keyword: string = "code"
): Promise<IWallpaperResp> => {
  try {
    const url = `https://api.unsplash.com/search/photos/?client_id=${
      process.env.UNSPLASH_ID ?? "tYopoedda78BuuvIBpnag9T2EjGHX2ZPCcw4MRCk_9U"
    }&query=${keyword}&lang=zh&orientation=landscape`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("网络异常");
  }
};

export const searchImgByKeyword2 = async (keyword: string = "code") => {
  try {
    return axios.post<IWallpaperResp>("http://localhost:3000/api/search", {
      keyword,
    });
  } catch (error) {
    console.log(error);
    throw new Error("网络错误");
  }
};
