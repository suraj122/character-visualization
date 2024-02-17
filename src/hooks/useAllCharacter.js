import { useEffect, useState } from "react";
import { API_URL } from "../utils/constant";

const useAllCharacter = (pageNum) => {
  const [allCharacterData, setAllCharacterData] = useState(null);
  useEffect(() => {
    fetchData();
  }, [pageNum]);

  const fetchData = async () => {
    try {
      const data = await fetch(API_URL + "/?page=" + pageNum);
      const json = await data.json();
      setAllCharacterData(json.results);
    } catch (error) {
      console.log(error);
    }
  };

  return allCharacterData;
};

export default useAllCharacter;
