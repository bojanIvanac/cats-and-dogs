import React, { useState } from "react";
import { fetchCat, fetchDog } from "../api/api.js";

const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState("");

  const handleFetchImage = () => {
    if (Math.random() < 0.5) {
      fetchCat()
        .then((response) => response.json())
        .then((data) => setImageUrl(data[0].url));
    } else {
      fetchDog()
        .then((response) => response.json())
        .then(({ message }) => setImageUrl(message));
    }
  };

  return (
    <div className="image-generator-wrapper">
      <img src={imageUrl} alt="cat or dog" />
      <button onClick={handleFetchImage}>Fetch!</button>
    </div>
  );
};

export default ImageGenerator;
