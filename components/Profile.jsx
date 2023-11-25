import PromptCard from "./PromptCard";
import Image from "next/image";
import Link from "next/link";

const Profile = ({ isSelf, name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="my-5">
      <h1 className="text-3xl leading-10 font-bold purple_gradient capitalize">
        {name} Profile
      </h1>
      <p className="mt-2 leading-7 text-gray-700">{desc}</p>

      {data.length ? (
        <div className="grid md:grid-cols-3 gap-5 my-10">
          {data.map((prompt, i) => (
            <PromptCard
              key={prompt._id}
              data={prompt}
              index={i}
              handleEdit={() => handleEdit && handleEdit(prompt._id)}
              handleDelete={() => handleDelete && handleDelete(prompt._id)}
            />
          ))}
        </div>
      ) : (
        <div className="mt-3">
          {isSelf && (
            <Link
              className="max-w-xs border-b border-b-primary !rounded-none w-52 pb-1 flex gap-2 items-center text-primary hover:bg-transparent"
              href="/create-prompt"
            >
              <svg
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path
                    strokeLinecap="round"
                    d="M14.5 6.5h3m0 0h3m-3 0v3m0-3v-3m-14.95 12c.065-.65.21-1.088.536-1.414c.586-.586 1.528-.586 3.414-.586c1.886 0 2.828 0 3.414.586c.586.586.586 1.528.586 3.414c0 1.886 0 2.828-.586 3.414c-.586.586-1.528.586-3.414.586c-1.886 0-2.828 0-3.414-.586c-.31-.31-.456-.718-.524-1.313"
                  />
                  <path d="M2.5 6.5c0-1.886 0-2.828.586-3.414C3.672 2.5 4.614 2.5 6.5 2.5c1.886 0 2.828 0 3.414.586c.586.586.586 1.528.586 3.414c0 1.886 0 2.828-.586 3.414c-.586.586-1.528.586-3.414.586c-1.886 0-2.828 0-3.414-.586C2.5 9.328 2.5 8.386 2.5 6.5Zm11 11c0-1.886 0-2.828.586-3.414c.586-.586 1.528-.586 3.414-.586c1.886 0 2.828 0 3.414.586c.586.586.586 1.528.586 3.414c0 1.886 0 2.828-.586 3.414c-.586.586-1.528.586-3.414.586c-1.886 0-2.828 0-3.414-.586c-.586-.586-.586-1.528-.586-3.414Z" />
                </g>
              </svg>
              Create Your First Prompt
            </Link>
          )}
          <Image
            className="opacity-70 mt-10"
            src="/assets/images/empty-profile.svg"
            width={300}
            height={250}
          />
        </div>
      )}
    </section>
  );
};

export default Profile;
