export interface IWallpaperResp {
  total: number;
  total_pages: number;
  results: {
    id: string;
    width: number;
    height: number;
    like: number;
    urls: {
      full: string;
      regular: string;
      raw: string;
      small: string;
      [key: string]: string;
    };
    tags: string[];
    description?: string;
    [key: string]: any;
  }[];
}
