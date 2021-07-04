import React, { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';

const Search = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 800);

  function restaurantFiltrado(e) {
    setDisplayValue(e.target.value);
    debouncedChange(e.target.value);
  }

  return (
    <input
      type="search"
      value={displayValue}
      onChange={restaurantFiltrado}
    />
  );
};

export default Search;
