import type { NextPage } from "next";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <main className="bg-black text-white text-center h-screen">
        <Header />
        <h1 className="text-6xl font-bold m-10">
          Hello World!
        </h1>
      </main>
    </div>
  );
};

export default Home;
