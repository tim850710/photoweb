import React from "react";

const Search = ({ search, setInput }) => {
  const iniputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input className="input" onChange={iniputHandler} type="text" />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
