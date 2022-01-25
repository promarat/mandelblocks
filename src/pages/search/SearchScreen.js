import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const SearchScreen = (props) => {
  const { search } = useLocation();
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    const params = queryString.parse(search);
    if (params.q) {
      setSearchKey(params.q);
    }
  }, [search]);

  return (
    <div>
      <input
        type="text"
        name="search"
      />
      <div>{searchKey}</div>
    </div>
  );
};

export default SearchScreen;
