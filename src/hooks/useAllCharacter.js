import { useEffect, useState } from "react";
import { API_URL } from "../utils/constant";

const useAllCharacter = (pageNum) => {
  const [allCharacterData, setAllCharacterData] = useState(null);
  useEffect(() => {
    fetchData();
  }, [pageNum]);

  const fetchData = async () => {
    const data = await fetch(API_URL + "/?page=" + pageNum);
    const json = await data.json();
    setAllCharacterData(json.results);
  };

  return allCharacterData;
};

export default useAllCharacter;
