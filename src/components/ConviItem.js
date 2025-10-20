import React from "react";
import "./ConviItem.scss";

const ConviItem = ({ article }) => {
  const { place_name, address_name, place_url } = article;
  return (
    <a
      href={place_url}
      className="conv-item"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* <div className="conv-item"> */}
      <p>
        <strong>{place_name}</strong>
      </p>
      <p>{address_name}</p>
      <a href={place_url} target="_blank" rel="noopener noreferrer">
        {place_url}
      </a>
      {/* </div> */}
    </a>
  );
};

export default ConviItem;
