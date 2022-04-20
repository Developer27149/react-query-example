import Image from "next/image";
import { useState } from "react";
import { useQuery } from "react-query";
import { searchImgByKeyword } from "../../services/unsplash";

export default function Wallpaper() {
  const [keyword, setKeyword] = useState("code");
  const { data, isLoading, error, isError, refetch } = useQuery("search-img", async () =>
    searchImgByKeyword(keyword)
  );
  if (isLoading) return <p>loading...</p>;
  if (isError) return <p className="text-red-800">{error}</p>;
  return (
    <div className="mx-auto my-4 w-full">
      <div className="flex justify-center align-middle">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value.trim())}
          placeholder="sea"
          className="m-4  p-1 px-2 rounded-sm text-gray-600 mr-0 outline-none border-blue-400 border-0 border-b"
        />
        <button className="bg-purple-500 h-8 p-1 m-4 ml-0 text-sm text-purple-100 uppercase border-purple-400 border-0 border-b" onClick={refetch}>
          Search
        </button>
      </div>
      <div className="grid grid-rows-5 grid-cols-2">
        {data.results.map((item) => {
          return (
            <img
              src={item.urls.regular}
              key={item.urls.regular}
              alt="wallpaper"
            />
          );
        })}
      </div>
    </div>
  );
}
