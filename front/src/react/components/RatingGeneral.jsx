import React from "react";
import { FaStar } from "react-icons/fa";
import RatingStyles from "../css/RatingStyles.css";

export default ({ size, ratingValue }) => {
  return (
    <div className="review-box">
      {[...Array(5)].map((star, index) => {
        const ratVal = index + 1;
        return (
          <label key={index}>
            <input type="radio" name="rating" />
            <FaStar
              class="star"
              color={ratVal <= ratingValue ? "#E8B023" : "#D1E8E8"}
              size={size}
            />
          </label>
        );
      })}
    </div>
  );
};
