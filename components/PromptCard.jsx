import Image from "next/image";

const PromptCard = ({
  data,
  index,
  handleTagClick,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div className="card w-full glass h-min">
      <div className="card-body p-4 py-3">
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
