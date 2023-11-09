import React from 'react';

const SearchResults = ({ searchResults }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        {searchResults.length > 0 && (
          <div>
            <h2>Search Results</h2>
            <ul>
              {searchResults.map(result => (
                <li key={result.id}>{result.title}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
