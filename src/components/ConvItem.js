import React from "react";
import "./ConvItem.scss";

const ConvItem = ({ article }) => {
  const { place_name, address_name, place_url } = article;
  return (
    <div className="conv-item">
      <p>
        <strong>{place_name}</strong>
      </p>
      <p>{address_name}</p>
      <a href={place_url} target="_blank" rel="noopener noreferrer">
        {place_url}
      </a>
    </div>
  );
};

export default ConvItem;
