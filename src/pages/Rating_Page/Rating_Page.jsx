import React, { useState, useEffect } from "react";
import "./rating_page.scss";

import RatingComponent from "../../components/Rating_Component/Rating_Compnent";
import GratefulComponent from "../../components/Grateful_Component/Grateful_Component";
const Rating_Page = () => {
  const [ratingProps, setRatingProps] = useState({
    sended: false,
    selected: 0,
  });

  useEffect(() => {
    console.log("rating selected", ratingProps.selected);
  }, [ratingProps]);

  return (
    <section className="rating-container">
      <div className="rating-container__both-components">
        {!ratingProps.sended ? (
          <RatingComponent
            setRatingProps={setRatingProps}
            ratingProps={ratingProps}
          />
        ) : (
          <GratefulComponent ratingProps={ratingProps} />
        )}
      </div>
    </section>
  );
};

export default Rating_Page;
