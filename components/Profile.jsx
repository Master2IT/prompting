import PromptCard from "./PromptCard";
import Image from "next/image";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="my-5">
      <h1 className="text-3xl leading-10 font-bold purple_gradient">
        {name} Profile
      </h1>
      <p className="mt-2 leading-7 text-gray-700">{desc}</p>

      {data.length ? (
        <div className="md:grid md:grid-cols-3 md:gap-5 my-10">
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
        <Image
          className="opacity-70 mt-10"
          src="/assets/images/empty-profile.svg"
          width={300}
          height={250}
        />
      )}
    </section>
  );
};

export default Profile;
