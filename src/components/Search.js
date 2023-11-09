import React, { useState } from 'react';
import SearchResults from './SearchResults';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/search?query=${searchQuery}`);
      const data = await response.json();

      if (response.ok) {
        setSearchResults(data.results);
      } else {
        console.error('Error:', data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="">
      <div className="row mb-4 footsearch">
        <div className="col-md-6 mx-auto text-center d-flex justify-content-between">
          <input
            type="text"
            className="form-control"
            placeholder="Search for Something...."
            value={searchQuery}
            onChange={handleInputChange}
          />
          <div className="me-3">
            <button className="btn btn-primary mt-2" onClick={handleSearch}>
            Search
            </button>
          </div>
        </div>
      </div>

      <SearchResults searchResults={searchResults} />
    </div>
  );
}

export default Search;
