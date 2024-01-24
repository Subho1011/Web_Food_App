import React, { useState } from "react";
import { SearchContext } from "./SearchContext";

const SearchProvider = (props) => {

  const [searchWord, setSearchWord] = useState("");

  /* const searchWordHandler = (word) => {
    setSearchWord(word);
  };
  let searchContext = {
    searchWord: searchWord,
    searchWordHandler: searchWordHandler
  } */
  console.log("This is SearchProvider.js and searchWord is" + searchWord);
  return (
    <SearchContext.Provider value={[searchWord, setSearchWord]}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;