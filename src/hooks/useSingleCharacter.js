import { useEffect, useState } from "react";
import { API_URL } from "../utils/constant";

const useSingleCharacter = (id) => {
  const [singleCharacter, setSingleCharacter] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL + "/" + id);
    const json = await data.json();
    setSingleCharacter(json);
  };

  return singleCharacter;
};

export default useSingleCharacter;
