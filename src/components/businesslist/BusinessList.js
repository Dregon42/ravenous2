import React from "react";
import "./BusinessList.css";

import Business from "../business/Business";

const BusinessList = ({ businesses }) => {
  return (
    <div className='BusinessList'>
      {businesses.map((business) => {
        return <Business business={business} key={business.name} />;
      })}
    </div>
  );
};

export default BusinessList;
