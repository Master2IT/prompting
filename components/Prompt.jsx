"use client";

import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const Prompt = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const param = useSearchParams();
  const searchParams = new URLSearchParams(param.toString());

  const fetchData = async () => {
    const response = await fetch("/api/prompt");
    const _data = await response.json();

    if (_data) setData(_data);

    setIsEmpty(false);
  };

  const getSearchData = async (s) => {
    const response = await fetch(`/api/prompt?search=${s || search}`);
    const _data = await response.json();

    if (!_data.length) setIsEmpty(true);

    setData(_data);
  };

  const handleTagClick = (tag) => {
    setSearch(tag);

    fetchSearchData(tag);
  };

  useEffect(() => {
    const s = searchParams.get("search");
    if (s) {
      setSearch(s);
      getSearchData(s);
    } else {
      setSearch("");
      fetchData();
    }
  }, [param]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (search) {
      fetchSearchData();
    } else {
      router.push("/");
      fetchData();
    }
  };

  const fetchSearchData = (tag) => {
    searchParams.set("search", tag || search);
    router.push(pathName + `?${searchParams}`);
  };

  const resetSearch = () => {
    setSearch("");
    router.push("/");
    fetchData();
  };

  return (
    <>
      <section className="w-full flex flex-col items-center">
        <form className="w-full max-w-md" onSubmit={handleSearch}>
          <div className="form-input">
            <input
              type="text"
              value={search}
              placeholder="Search for a tag or username"
              onInput={(e) => {
                setSearch(e.target.value);
              }}
              className="input rounded-full input-bordered w-full"
            />
            <label className="label mx-5">
              <span className="label-text-alt">
                Press <span className="font-bold">Enter</span> to see the result
              </span>
              {search && (
                <button
                  type="button"
                  onClick={resetSearch}
                  className="text-gray-500 border-b border-gray-400 !rounded-none label-text-alt"
                >
                  Clear search
                </button>
              )}
            </label>
          </div>
        </form>

        {isEmpty ? (
          <div className="my-10 flex flex-col gap-2">
            <Image
              className="opacity-70"
              src="/assets/images/no-data.svg"
              width={150}
              height={150}
            />
            <span className="mt-3 text-primary pl-10">Not found!</span>
          </div>
        ) : data.length ? (
          <div className="max-w-md w-full md:max-w-6xl my-10">
            <PromptCardList data={data} handleTagClick={handleTagClick} />
          </div>
        ) : (
          <Image
            className="opacity-70 mt-10"
            src="/assets/images/welcome.svg"
            width={350}
            height={350}
          />
        )}
      </section>
    </>
  );
};

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="grid md:grid-cols-3 gap-5">
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
