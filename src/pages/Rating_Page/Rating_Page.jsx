import React, { useState } from "react";
import "./rating_page.scss";

import RatingComponent from "../../components/Rating_Component/Rating_Compnent";
import GratefulComponent from "../../components/Grateful_Component/Grateful_Component";

const Rating_Page = () => {
  const [rating, setRating] = useState(0);

  return (
    <section className="rating-container">
      <div className="rating-container__both-components">
        {!rating ? (
          <RatingComponent setRating={setRating} />
        ) : (
          <GratefulComponent rating={rating} />
        )}
      </div>
    </section>
  );
};

export default Rating_Page;
