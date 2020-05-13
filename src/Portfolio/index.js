import React, { useContext } from 'react';
import { AnimalContext } from '../Contexts/AnimalContext';
import PortfolioItem from './PortfolioItem';

export const Portfolio = () => {
  const { state } = useContext(AnimalContext);

  return (
    <section className="bg-light">
      <div className="container">
        <div>page: {state.pagination.current_page}</div>
        <div className="row">
          {state.animals.map((item) => (
            <PortfolioItem key={item.id} value={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
