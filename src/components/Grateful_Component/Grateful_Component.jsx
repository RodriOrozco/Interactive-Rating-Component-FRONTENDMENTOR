import React from "react";
import "./grateful_component.scss";

const Grateful_Component = ({ ratingSelected }) => {
  return (
    <div>
      <img src="" alt="thanks" />
      <p>{`You selected ${ratingSelected} out of 5`}</p>
      <h3>Thank you!</h3>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default Grateful_Component;
