import React, { useContext, useState } from 'react';
import { AnimalContext } from '../Contexts/AnimalContext';

export const SearchParams = (props) => {
  const { state, dispatch } = useContext(AnimalContext);
  const search = useState({ terms: {} });

  const onClick = (event) => {
    const newSearch = {
      terms: {
        age: '8',
        color: 'brown',
      },
    };

    const newPayload = [
      {
        id: '777',
      },
      {
        id: '888',
      },
    ];

    dispatch({
      type: 'update_search',
      payload: newPayload,
    });
  };

  return <div>{JSON.stringify(state)}</div>;
};
