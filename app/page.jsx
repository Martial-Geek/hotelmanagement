import Image from "next/image";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Heera Holiday Hotel</span>
      </h1>
      <p className="desc text-center">
        Welcome to Heera Holiday! You can easily book luxury,deluxe rooms at
        economical cost. Food and room managing utilities are also provided
      </p>

      <Image
        className="w-full pt-5"
        src="/assets/images/bg.png"
        width={0}
        height={0}
        sizes="100vw"
      />
    </section>
  );
};

export default Home;
