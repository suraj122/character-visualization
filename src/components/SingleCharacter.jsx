import React from "react";
import { Link, useParams } from "react-router-dom";
import useSingleCharacter from "../hooks/useSingleCharacter";
import SingleCharShimmer from "./SingleCharShimmer";

const SingleCharacter = () => {
  const { id } = useParams();
  const character = useSingleCharacter(id);

  if (character === null) return <SingleCharShimmer />;
  const {
    name,
    image,
    status,
    species,
    gender,
    origin,
    location,
    episode,
    created,
  } = character;
  console.log(character);

  return (
    <main className="bg-gray-900 py-8 text-white">
      <header className="max-w-7xl mx-auto px-16">
        <Link to="/" className="bg-orange-600 font-semibold px-4 py-2 rounded">
          👈 See All Characters
        </Link>
      </header>
      <section className="container mx-auto py-24 px-16">
        <div className="max-w-7xl mx-auto w-full xl:flex items-center justify-center gap-32">
          <header className="">
            <img
              width="300"
              height="300"
              className="inline-block bg-gray-800"
              src={image}
              alt={name}
            />
          </header>
          <article className="mt-8 xl:mt-0">
            <h1 className="text-4xl font-extrabold">{name}</h1>
            <div className="flex items-center mt-2">
              {status === "Alive" ? (
                <span className="inline-block bg-green-600 w-3 h-3 rounded-full"></span>
              ) : (
                <span className="inline-block bg-red-600 w-3 h-3 rounded-full"></span>
              )}
              <span className="ml-3">
                {status} - {species}
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl text-gray-500 font-semibold">
                Gender: <span className="text-white">{gender}</span>
              </h3>
              <h3 className="mt-4 text-2xl text-gray-500 font-semibold">
                Origin: <span className="text-white">{origin.name}</span>
              </h3>
              <h3 className="mt-4 text-2xl text-gray-500 font-semibold">
                Location: <span className="text-white">{location.name}</span>
              </h3>
              <h3 className="mt-4 text-2xl text-gray-500 font-semibold">
                Total Episodes:{" "}
                <span className="text-white">{episode.length}</span>
              </h3>
              <h3 className="mt-4 text-2xl text-gray-500 font-semibold">
                Created on:{" "}
                <span className="text-white">{created.split("T")[0]}</span>
              </h3>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default SingleCharacter;
