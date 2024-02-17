import React, { useState } from "react";
import useAllCharacter from "../hooks/useAllCharacter";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const AllCharacter = () => {
  const [pageNum, setPageNum] = useState(40);
  const characters = useAllCharacter(pageNum);

  const handleNext = () => {
    if (pageNum < 42) setPageNum(pageNum + 1);
  };
  const handlePrev = () => {
    if (pageNum > 1) setPageNum(pageNum - 1);
  };

  if (characters === null) return <Shimmer />;
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto w-full px-16 ">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16">
          {characters.map((character) => (
            <Link to={"/character/" + character.id} key={character.id}>
              <CharacterCard character={character} />
            </Link>
          ))}
        </div>
        <footer className="flex justify-center items-center mt-12 gap-4">
          {pageNum === 1 ? (
            ""
          ) : (
            <button
              onClick={handlePrev}
              className="bg-orange-600 text-white font-semibold rounded px-4 py-2"
            >
              Prev
            </button>
          )}
          {pageNum === 42 ? (
            ""
          ) : (
            <button
              onClick={handleNext}
              className="bg-orange-600 text-white font-semibold rounded px-4 py-2"
            >
              Next
            </button>
          )}
        </footer>
      </div>
    </section>
  );
};

export default AllCharacter;
