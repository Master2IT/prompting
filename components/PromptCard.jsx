import Image from "next/image";
import { useState } from "react";

const PromptCard = ({
  data,
  index,
  handleTagClick,
  handleEdit,
  handleDelete,
}) => {
  const [copied, setCopied] = useState("");
  const handleCopy = () => {
    setCopied(data.prompt);
    navigator.clipboard.writeText(data.prompt);

    setTimeout(() => setCopied(""), 1500);
  };

  return (
    <div className="card w-full glass h-min">
      <div className="card-body p-4 py-3">
        <div className="flex justify-between">
          <div className="card-title">
            <Image
              src={data.creator.image}
              width={34}
              height={34}
              alt={data.creator.username}
              className="rounded-full"
            />
            <h3 className="flex flex-col">
              <span className="text-gray-700 capitalize">
                {data.creator.username.replace("_", " ")}
              </span>
              <span className="text-sm font-normal text-gray-600">
                {data.creator.email}
              </span>
            </h3>
          </div>
          <button
            className={`btn btn-ghost btn-sm ${
              !copied ? "btn-square" : "bg-green-100"
            }`}
            onClick={handleCopy}
          >
            <svg
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                fill="none"
                stroke="#94a3b8"
                stroke-linecap="round"
                stroke-width="1.5"
              >
                <path d="M20.998 10c-.012-2.175-.108-3.353-.877-4.121C19.243 5 17.828 5 15 5h-3c-2.828 0-4.243 0-5.121.879C6 6.757 6 8.172 6 11v5c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22h3c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16v-1" />
                <path d="M3 10v6a3 3 0 0 0 3 3M18 5a3 3 0 0 0-3-3h-4C7.229 2 5.343 2 4.172 3.172C3.518 3.825 3.229 4.7 3.102 6" />
              </g>
            </svg>
            {copied && (
              <span className="text-gray-500 font-normal">Copied</span>
            )}
          </button>
        </div>
        <p className="flex-grow-0">{data.prompt}</p>
        <div className="flex-wrap">
          {data.tags.map((tag) => (
            <button className="mr-3 bg-transparent text-gray-400">
              #{tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
