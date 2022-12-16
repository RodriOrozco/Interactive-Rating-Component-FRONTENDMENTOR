import React, { useState } from "react";
import "./rating_component.scss";

import star from "../../images/icon-star.svg";

const Rating_Compnent = ({ setRating }) => {
  const [numbersRadio, setNumbersRadio] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRating(numbersRadio);
  };

  return (
    <div className="front-container">
      <img src={star} alt="star" className="front-container__icon-star" />
      <div className="text-container">
        <h3 className="text-container__title">How did we do?</h3>
        <p className="text-container__paragraph">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="numbers">
          <input
            type="radio"
            name="number"
            value="1"
            id="one"
            onChange={(e) => setNumbersRadio(e.target.value)}
          />
          <label htmlFor="one" className="numbers__label">
            1
          </label>
          <input
            type="radio"
            name="number"
            value="2"
            id="two"
            onChange={(e) => setNumbersRadio(e.target.value)}
          />
          <label htmlFor="two" className="numbers__label">
            2
          </label>
          <input
            type="radio"
            name="number"
            value="3"
            id="three"
            onChange={(e) => setNumbersRadio(e.target.value)}
          />
          <label htmlFor="three" className="numbers__label">
            3
          </label>
          <input
            type="radio"
            name="number"
            value="4"
            id="four"
            onChange={(e) => setNumbersRadio(e.target.value)}
          />
          <label htmlFor="four" className="numbers__label">
            4
          </label>
          <input
            type="radio"
            name="number"
            value="5"
            id="five"
            onChange={(e) => setNumbersRadio(e.target.value)}
          />
          <label htmlFor="five" className="numbers__label">
            5
          </label>
        </div>
        <button
          type="submit"
          disabled={!numbersRadio ? true : false}
          className="form-container__btn-submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Rating_Compnent;
