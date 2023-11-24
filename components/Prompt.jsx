"use client";

import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";
import Image from "next/image";

const Prompt = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/prompt", { cache: "no-store" });
      const _data = await response.json();
      setData(_data);
    };

    fetchData();
  }, []);

  return (
    <>
      {data.length ? (
        <section className="w-full flex flex-col items-center">
          <form className="w-full max-w-md">
            <input
              type="text"
              value={search}
              placeholder="Search for a tag or username"
              onInput={(e) => {
                setSearch(e.target.value);
              }}
              className="input rounded-full input-bordered w-full"
            />
          </form>

          <div className="max-w-md md:max-w-6xl my-10">
            <PromptCardList data={data} handleTagClick={() => {}} />
          </div>
        </section>
      ) : (
        <Image
          className="opacity-70"
          src="/assets/images/welcome.svg"
          width={350}
          height={350}
        />
      )}
    </>
  );
};

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="grid_cards gap-5">
      {data.map((prompt, i) => (
        <PromptCard
          key={prompt._id}
          data={prompt}
          index={i}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

export default Prompt;
