"use client";

import { useState } from "react";
import Link from "next/link";

const Form = ({ type, data, setData, submitting, handleSubmit }) => {
  const [tag, setTag] = useState("");

  const handleTags = (input) => {
    let value = input.target.value;
    setTag(value);
  };

  const handleEnterTag = (e) => {
    if (e.key == "Enter") {
      e.preventDefault();

      const existsTag = data.tags.findIndex((t) => t == tag);
      console.log(existsTag);

      if (existsTag == -1) {
        const newTags = [...data.tags, tag.replace(" ", "").toLowerCase()];
        console.log(newTags);
        setData({ ...data, tags: newTags });
      }

      setTag("");
    }
  };

  const handleRemoveTag = (tag) => {
    const newTags = [...data.tags];
    const index = data.tags.findIndex((t) => t == tag);
    if (index != -1) {
      newTags.splice(index, 1);
      setData({ ...data, tags: newTags });
    }
  };
  return (
    <section className="my-5 flex flex-col max-w-md">
      <h1 className="text-3xl font-bold purple_gradient">{type} Your Prompt</h1>
      <p className="mt-2 leading-7 text-gray-700">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>

      {/* <div className="mt-10 flex flex-col gap-2">
        {!data.prompt ? (
          <div role="alert" className="flex alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Prompt is required!</span>
          </div>
        ) : (
          <></>
        )}
        {!data.tags.length ? (
          <div role="alert" className="flex alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Prompt is required!</span>
          </div>
        ) : (
          <></>
        )}
      </div> */}

      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Your AI Prompt</span>
          </label>
          <textarea
            onInput={(e) => setData({ ...data, prompt: e.target.value })}
            className="textarea textarea-bordered h-24"
            placeholder="Write your prompt here ..."
          ></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">
              Tags
              <span className="font-normal ml-1">(#code, #web_developer)</span>
            </span>
          </label>
          <input
            type="text"
            value={tag}
            placeholder="Tags"
            onInput={handleTags}
            onKeyDown={handleEnterTag}
            className="input input-bordered w-full"
          />

          <div className="mt-3">
            {data?.tags?.length ? (
              <div className="flex gap-2 flex-wrap">
                {data?.tags?.map((tag) => (
                  <div className="badge relative pr-6 !py-3">
                    #{tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="absolute right-[3px] top-[5px]"
                    >
                      <svg
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m7 7l10 10M7 17L17 7"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-10">
          <Link
            href="/"
            className="btn btn-ghost text-gray-500 font-normal px-5"
          >
            Cancel
          </Link>
          <button
            disabled={submitting}
            className="btn btn_gradient border-2 border-transparent hover:border-primary !text-white px-14"
          >
            {submitting ? (
              <>
                {type} <span className="loading loading-dots loading-xs"></span>
              </>
            ) : (
              type
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
