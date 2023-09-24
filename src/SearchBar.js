import React, { useState } from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [location, setLocation] = useState(null); 
  const [sortBy, setSortBy] = useState(sortByOptions["Best Match"]);

  const getSortByClass = (sortByOption) => {
    if (sortBy === sortByOption) {
      return "active";
    }
    return "";
  };

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  const handleChangeToTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);

  };

  const handleChangeToLocation = (e) => {
    e.preventDefault();
    setLocation(e.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // searchYelp(searchTerm, location, sortBy);
    console.log('Searching Yelp with Pizza, Brooklyn, best_match')
  };


  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          className={getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={() => {
            handleSortByChange(sortByOptionValue);
          }}
        >
          {sortByOption}
        </li>
      );
    });
  };

  return (
    <div className='SearchBar'>
      <div className='SearchBarSortOptions'>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className='SearchBarFields'>
        <input onChange={handleChangeToTerm} placeholder="Search Businesses" />
        <input onChange={handleChangeToLocation} placeholder="Where?" />
      </div>
      <div className='SearchBarSubmit'>
        <button onClick={handleSearch}>Let's Go</button>
      </div>
    </div>
  );
};

export default SearchBar;

