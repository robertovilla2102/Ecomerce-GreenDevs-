import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import RatingsForm from "../components/RatingsForm";

import { addNewReview } from "../../redux/action-creators/ratings";

const RatingContainer = ({ history, addNewReview, productId }) => {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");
  const [hover, setHover] = useState(null);

  const handlerTextArea = e => {
    e.preventDefault();
    console.log(e.target.value);

    setComment(e.target.value);
  };

  const onSubmitReview = e => {
    e.preventDefault();
    addNewReview({
      rating: rating,
      review: comment,
      productId: productId
    }).then(res => history.push("/home"));
  };

  return (
    <div>
      <RatingsForm
        handlerTextArea={handlerTextArea}
        onSubmitReview={onSubmitReview}
        rating={rating}
        setRating={setRating}
        hover={hover}
        setHover={setHover}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addNewReview: review => dispatch(addNewReview(review))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(RatingContainer));
