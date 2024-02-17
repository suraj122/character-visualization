import { useEffect, useState } from "react";
import { API_URL } from "../utils/constant";

const useSingleCharacter = (id) => {
  const [singleCharacter, setSingleCharacter] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(API_URL + "/" + id);
      const json = await data.json();
      setSingleCharacter(json);
    } catch (error) {
      console.log(error);
    }
  };

  return singleCharacter;
};

export default useSingleCharacter;
