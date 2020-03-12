import React from "react";
import NewReview from "./NewReview";
import ErrorDetected from "./ErrorDetected";

import { EXIST_REVIEW } from "../../assets/ErrorsMsg.js";

export default ({
  setRating,
  rating,
  hover,
  setHover,
  handlerTextArea,
  onSubmitReview,
  compra
}) => {
  return (
    <div class="container">
      <div class="row comments">
        <div class="col-md-6">
          <div class="well well-sm">
            <div>
              {compra.valorado ? (
                <div className="container">
                  <div className="row rating-star">
                    <ErrorDetected msg={EXIST_REVIEW} />
                  </div>
                </div>
              ) : (
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
                    </form>
                  </div>
                  <div className="text-left mt-3 mb-5 mx-auto">
                    <NewReview
                      setRating={setRating}
                      setHover={setHover}
                      rating={rating}
                      hover={hover}
                      onSubmitReview={onSubmitReview}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
