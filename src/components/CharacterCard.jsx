import React from "react";

const CharacterCard = ({ character }) => {
  const { name, image, species, status, location, origin } = character;

  return (
    <article className="text-white flex bg-gray-800 shadow-xl rounded-lg">
      <img
        className="max-h-[220px] object-cover rounded-bl-lg rounded-tl-lg bg-gray-800"
        src={image}
        alt={name}
        width="220"
        height="220"
      />

      <div className="px-4 py-3">
        <h2 className="text-2xl font-extrabold font-sora">{name}</h2>
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
        <div className="mt-3">
          <h4 className="text-gray-500 font-bold text-xl">
            Last Known Location:
          </h4>
          <p>{location.name}</p>
        </div>
        <div className="mt-3">
          <h4 className="text-gray-500 font-bold text-xl">Origin:</h4>
          <p>{origin.name}</p>
        </div>
      </div>
    </article>
  );
};
export default CharacterCard;
