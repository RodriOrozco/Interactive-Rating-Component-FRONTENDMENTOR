import React, { useState } from "react";
import "./rating_page.scss";

import RatingComponent from "../../components/Rating_Component/Rating_Compnent";
import GratefulComponent from "../../components/Grateful_Component/Grateful_Component";
const Rating_Page = () => {
  const [ratingSend, setRatingSend] = useState(false);
  const [ratingSelected, setRatingSelected] = useState(0);

  return (
    <div className="Rating-container">
      {!ratingSend ? (
        <RatingComponent setRatingSend={setRatingSend} />
      ) : (
        <GratefulComponent ratingSelected={ratingSelected} />
      )}
    </div>
  );
};

export default Rating_Page;
