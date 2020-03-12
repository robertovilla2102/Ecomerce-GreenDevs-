import React from "react";
import Rating from "./Rating";

export default ({ setRating, rating, hover, setHover, onSubmitReview }) => {
  return (
    <div>
      <Rating
        setRating={setRating}
        rating={rating}
        hover={hover}
        setHover={setHover}
      />
      <div className="review-btn">
        <button class="btn btn-danger" type="submit">
          Cancel
        </button>
        <button onClick={onSubmitReview} class="btn btn-success" type="submit">
          Save
        </button>
      </div>
    </div>
  );
};
