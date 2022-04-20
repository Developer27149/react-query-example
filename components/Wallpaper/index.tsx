import Image from "next/image";
import { useState } from "react";
import { useQuery } from "react-query";
import { searchImgByKeyword } from "../../services/unsplash";

export default function Wallpaper() {
  const [keyword, setKeyword] = useState("code");
  const [idx, setIdx] = useState(0);
  const { data, isLoading, error, isError, refetch } = useQuery(
    "search-img",
    async () => searchImgByKeyword(keyword)
  );

  if (isError) return <p className="text-red-800">error...</p>;
  return (
    <div className="mx-auto my-0 py-12 w-full h-screen overflow-scroll">
      <div className="flex justify-center align-middle my-8">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value.trim())}
          placeholder="sea"
          className="m-4  p-1 px-2 rounded-sm text-gray-600 mr-0 outline-none border-blue-400 border-0 border-b"
        />
        <button
          className="bg-purple-500 h-8 p-1 m-4 ml-0 text-sm text-purple-100 uppercase border-purple-400 border-0 border-b"
          onClick={() => {
            refetch();
          }}
        >
          Search
        </button>
      </div>
      <div className="flex justify-center">
        {isLoading ? (
          "loading"
        ) : (
          <img
            src={data?.results[idx].urls.regular}
            alt="wallpaper"
            className="object-fit"
            onClick={() => {
              setIdx((prev) => {
                if (prev === data?.results.length - 1) {
                  return 0;
                }
                return prev + 1;
              });
            }}
          />
        )}
      </div>
    </div>
  );
}
