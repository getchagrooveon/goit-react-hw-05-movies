import React from 'react';
import { useState } from 'react';
import { PropTypes } from 'prop-types';

const SearchForm = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (!query) {
      alert('Please enter a query');
      return;
    }
    setSearchParams({ query });
  };
  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Search</button>
      <input
        name="query"
        value={query}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
};
