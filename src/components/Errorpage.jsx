import React from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <main className="bg-gray-900 py-16 text-center h-screen flex justify-center items-center text-white">
      <section>
        <h1 className="text-9xl font-extrabold ">404</h1>
        <Link
          to="/"
          className="inline-block text-lg bg-orange-600 font-medium px-4 py-2 rounded mt-4"
        >
          Go back to Homepage
        </Link>
      </section>
    </main>
  );
};

export default Errorpage;
