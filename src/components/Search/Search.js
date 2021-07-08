import React, { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { Input, ContainerInput, SearchI } from './styled'

const Search = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 800);

  function restaurantFiltrado(e) {
    setDisplayValue(e.target.value);
    debouncedChange(e.target.value);
  }

  return (
    <ContainerInput>
      <SearchI/><Input
        type="text"
        value={displayValue}
        onChange={restaurantFiltrado}
        autofocus
      />
    </ContainerInput>
  );
};

export default Search;
