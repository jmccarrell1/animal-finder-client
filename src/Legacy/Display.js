import React, { useContext } from 'react';
import { AnimalContext } from '../Contexts/AnimalContext';

const Display = () => {
  const { state } = useContext(AnimalContext);

  if (!state.hasResults) {
    return <div></div>;
  }

  return (
    <div>
      in display
      <ul>
        {state.animals.map((item) => (
          <li>
            {item.id}
            <img src={item.photos[0].small} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Display;
