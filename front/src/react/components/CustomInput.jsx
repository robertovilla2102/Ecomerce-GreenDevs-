import React from "react";

export default ({
  optionsClass,
  handleInput,
  nameInput,
  typeInput,
  placeholderInput
}) => {
  return (
    <div className={optionsClass}>
      <div className="col-md-3">
        <label htmlFor="name">{nameInput}</label>
      </div>
      <div className="col-md-8">
        <input
          type={typeInput}
          className="form-control"
          name={nameInput.toLowerCase()}
          placeholder={placeholderInput}
          onBlur={handleInput}
        />
      </div>
    </div>
  );
};
