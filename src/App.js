import React, { useState, useEffect } from "react";
import "./App.css";
import getData from "./utils/server";

import BusinessList from "./components/businesslist/BusinessList";
import SearchBar from "./components/searchbar/SearchBar";

// const business = {
//   imageSrc:
//     "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
//   name: "MarginOtto Pizzeria",
//   address: "1010 Paddington Way",
//   city: "Bordertown",
//   state: "NY",
//   zipCode: "10101",
//   category: "Italian",
//   rating: 4.5,
//   reviewCount: 90,
// };

// const businesses = [business, business, business, business, business, business];

const App = () => {
  const [businesses, setBusinesses] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const searchYelp = (term, location, sortBy) => {
    setLoading(true);
    setError(null);

    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    getData(term, location, sortBy)
      .then((data) => {
        setBusinesses(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    console.log("Businesses updated:", businesses);
  }, [businesses]);

  return (
    <div className='App'>
      <h1>NomNom Navigator</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
