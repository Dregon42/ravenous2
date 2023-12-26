import React, { useState } from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = ({ searchYelp }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState(''); 
  const [sortBy, setSortBy] = useState('best_match');

  const getSortByClass = (sortByOption) => {
    if (sortBy === sortByOption) {
      return "active";
    }
    return "";
  };

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  const handleChangeToTerm = (event) => {
    setSearchTerm(event.target.value);

  };

  const handleChangeToLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchYelp(searchTerm, location, sortBy);
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
      <form onSubmit={handleSearch}>
        <div className='SearchBarFields'>
          <input onChange={handleChangeToTerm} placeholder="Search Businesses" />
          <input onChange={handleChangeToLocation} placeholder="Where?" />
        </div>
        <div className='SearchBarSubmit'>
          <button type="submit">Let's Go</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

