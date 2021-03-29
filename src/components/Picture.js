import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        <a target="_blank" href={data.src.large}>
          <br></br>
          Download:click here!!!!
        </a>
      </p>
    </div>
  );
};

export default Picture;
