import React from "react";
import "./BusinessList.css";

import Business from "../business/Business";

const BusinessList = ({ businesses }) => {

  if (!businesses || !Array.isArray(businesses) || businesses.length === 0) {
    return <div>No businesses to display.</div>;
  }

  return (
    <div className='BusinessList'>
      {businesses.map((business) => {
        return <Business business={business} key={business.id} />;
      })}
    </div>
  );
};

export default BusinessList;
