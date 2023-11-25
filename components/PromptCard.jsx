import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import moment from "moment";

const PromptCard = ({
  data,
  index,
  handleTagClick,
  handleEdit,
  handleDelete,
}) => {
  const { data: session } = useSession();
  const pathName = usePathname();
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
                {data.creator.name}
              </span>
              <span className="text-sm font-normal text-gray-500">
                @{data.creator.username}
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
            <button
              onClick={() => handleTagClick && handleTagClick(tag)}
              className="mr-3 bg-transparent text-gray-400"
            >
              #{tag}
            </button>
          ))}
        </div>

        {session?.user.id === data.creator._id && pathName === "/profile" && (
          <div className="flex justify-end gap-2 mt-5">
            <button
              onClick={handleDelete}
              className="btn px-5 btn-sm btn-outline btn-error"
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
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M20.5 6h-17m5.67-2a3.001 3.001 0 0 1 5.66 0m3.543 11.4c-.177 2.654-.265 3.981-1.13 4.79c-.865.81-2.195.81-4.856.81h-.774c-2.66 0-3.99 0-4.856-.81c-.865-.809-.953-2.136-1.13-4.79l-.46-6.9m13.666 0l-.2 3"
                />
              </svg>
              Remove
            </button>
            <button
              onClick={handleEdit}
              className="btn px-5 btn-sm btn-outline"
            >
              <svg
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                >
                  <path d="M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12v-1.5M13.5 2H12C7.286 2 4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536" />
                  <path d="m16.652 3.455l.649-.649A2.753 2.753 0 0 1 21.194 6.7l-.65.649m-3.892-3.893s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298m-3.893-3.893L10.687 9.42c-.404.404-.606.606-.78.829c-.205.262-.38.547-.524.848c-.121.255-.211.526-.392 1.068L8.412 13.9m12.133-6.552l-2.983 2.982m-2.982 2.983c-.404.404-.606.606-.829.78a4.59 4.59 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-1.735.579m0 0l-1.123.374a.742.742 0 0 1-.939-.94l.374-1.122m1.688 1.688L8.412 13.9" />
                </g>
              </svg>
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromptCard;
