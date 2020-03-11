import React from "react";
import { FaStar } from "react-icons/fa";
import RatingStyles from "../css/RatingStyles.css";

export default ({ setHover, setRating, hover, rating }) => {
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
              }}
            />
            <FaStar
              class="star"
              color={ratingValue <= (hover || rating) ? "#E8B023" : "#D1E8E8"}
              size={40}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};
