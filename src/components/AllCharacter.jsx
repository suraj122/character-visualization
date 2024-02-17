import React, { useEffect } from "react";
import useAllCharacter from "../hooks/useAllCharacter";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";

const AllCharacter = () => {
  const characters = useAllCharacter();

  if (characters === null) return <h1>Loading...</h1>;
  console.log(characters);
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto w-full px-16 ">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16">
          {characters.map((character) => (
            <Link to="/" key={character.id}>
              <CharacterCard character={character} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCharacter;
