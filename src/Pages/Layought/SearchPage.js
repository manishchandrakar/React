import React, { useState } from 'react';
import Header from './Header';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Implement the search logic here using the 'searchQuery' state
    alert('You are searching for: ' + searchQuery);
  };

  return (
    <div>
      <Header />
    
    </div>
  );
}

export default Search;
