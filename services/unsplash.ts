import axios from "axios";
import { IWallpaperResp } from '../types/wallpaper';

export const searchImgByKeyword = async (keyword: string = "code"): Promise<IWallpaperResp> => {
  try {
    const url = `https://api.unsplash.com/search/photos/?client_id=${
      process.env.UNSPLASH_ID ?? "tYopoedda78BuuvIBpnag9T2EjGHX2ZPCcw4MRCk_9U"
    }&query=${keyword}&lang=zh&w=1920`;
    console.log(url);
    const {data} = axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("网络异常");
  }
};
