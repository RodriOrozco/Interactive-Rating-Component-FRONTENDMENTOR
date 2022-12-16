import React from "react";
import "./grateful_component.scss";

const Grateful_Component = ({ rating }) => {
  return (
    <div className="back-container">
      <img src="" alt="thanks" />
      <p>{`You selected ${rating} out of 5`}</p>
      <h3>Thank you!</h3>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default Grateful_Component;
