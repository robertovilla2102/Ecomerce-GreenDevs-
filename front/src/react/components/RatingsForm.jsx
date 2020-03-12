import React from "react";
import Rating from "./Rating";

export default ({
  setRating,
  rating,
  hover,
  setHover,
  handlerTextArea,
  onSubmitReview
}) => {
  return (
    <div class="container">
      <div class="row comments">
        <div class="col-md-6">
          <div class="well well-sm">
            <div class="text-right">
              <div class="row rating-star" id="post-review-box">
                <div class="col-md-12">
                  <form accept-charset="UTF-8" action="" method="post">
                    <input id="ratings-hidden" name="rating" type="hidden" />
                    <textarea
                      class="form-control animated"
                      cols="50"
                      id="new-review"
                      name="comment"
                      placeholder="Enter your review here..."
                      rows="3"
                      onBlur={handlerTextArea}
                    ></textarea>
                    <div class="text-left">
                      <Rating
                        setRating={setRating}
                        rating={rating}
                        hover={hover}
                        setHover={setHover}
                      />
                      <button class="btn btn-danger" type="submit">
                        Cancel
                      </button>
                      <button
                        onClick={onSubmitReview}
                        class="btn btn-success"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
