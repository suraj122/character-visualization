import { useEffect, useState } from "react";
import { API_URL } from "../utils/constant";

const useAllCharacter = () => {
  const [allCharacterData, setAllCharacterData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setAllCharacterData(json.results);
  };

  return allCharacterData;
};

export default useAllCharacter;
