import React from "react";
import "./grateful_component.scss";

import thanksImg from "../../images/illustration-thank-you.svg";

const Grateful_Component = ({ rating }) => {
  return (
    <section className="back-container">
      <img src={thanksImg} alt="thanks" className="back-container__image" />
      <p className="back-container__selected">{`You selected ${rating} out of 5`}</p>
      <div className="text-container">
        <h3 className="text-container__title">Thank you!</h3>
        <p className="text-container__paragraph">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </section>
  );
};

export default Grateful_Component;
