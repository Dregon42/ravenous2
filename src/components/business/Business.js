import React from "react";
import "./Business.css";

const Business = ({ business }) => {
  return (
    <div className='Business'>
      <div className='imageContainer'>
        <img src={business.image_url} alt="" />
      </div>
      <h2>{business.name}</h2>
      <div className='BusinessInformation'>
        <div className='BusinessAddress'>
          <p>{business.location.display_address[0]}</p>
          <p>{business.location.display_address[1]}</p>
          {/* <p>{`${business.state} ${business.zipCode}`}</p> */}
        </div>
        <div className='BusinessReview'>
          <h3>{business.categories[0].title.toUpperCase()}</h3>
          <h3 className='rating'>{`${business.rating} stars`}</h3>
          <p>{`${business.review_count} reviews`}</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
