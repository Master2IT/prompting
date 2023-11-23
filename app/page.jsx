import Prompt from "@components/Prompt";

const Home = () => {
  return (
    <section className="w-full flex items-center flex-col">
      <div className="text-center my-10">
        <h1 className="leading-[1.2em] font-bold purple_gradient text-5xl md:text-7xl mb-2">
          Discover and Share
          <br />
          <span>[AI Prompts]</span>
        </h1>
        <p className="font-regular text-lg px-5 md:px-0 md:text-[18px] text-gray-800 text-center">
          Create your text to generate with AI to envision how the world will
          operate.
        </p>
      </div>
      <Prompt />
    </section>
  );
};

export default Home;
