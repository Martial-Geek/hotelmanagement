import Image from "next/image";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text orange_gradient text-center">
        Heera Holiday Hotel
      </h1>
      <p className="desc text-center">
        Welcome to Heera Holiday! You can easily book luxury/regular
        rooms,bungalows and cottages at economical cost. Food and room managing
        services are also provided.
      </p>

      <Image
        className="my-10 max-w-6xl"
        src="/assets/images/bg.png"
        width={2000}
        height={2000}
      />
    </section>
  );
};

export default Home;
