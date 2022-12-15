import React from "react";
import "./rating_component.scss";

const Rating_Compnent = ({ setRatingSend }) => {
  return (
    <div>
      <img src="" alt="star" />
      <h3>How did we do?</h3>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form action="">
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
      </form>
      <button>Submit</button>
    </div>
  );
};

export default Rating_Compnent;
