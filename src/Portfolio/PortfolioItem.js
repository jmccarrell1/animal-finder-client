import React from 'react';
import useModal from './useModal';
import PortfolioModal from './PortfolioModal';

const PortfolioItem = (item) => {
  const { isShowing, toggle } = useModal();

  if (!item.value) {
    return <div></div>;
  }

  const animalName = item.value.name.length ? (
    <div>{item.value.name}</div>
  ) : (
    <div>I need a name :(</div>
  );

  const animalImage = item.value.photos.length ? (
    <img
      src={item.value.photos[0].medium}
      alt={animalName}
      className="card-img-top"
    />
  ) : null;

  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow border-0 h-100">
        <a href="#" onClick={toggle}>
          {animalImage}
        </a>
        <div className="card-body">
          <h5>
            <a href="#" className="text-dark" onClick={toggle}>
              {animalName}
            </a>
          </h5>
          <p className="text-muted card-text">{item.value.description}</p>
          <div>breed: {item.value.breeds.primary}</div>
          <div>gender: {item.value.gender}</div>
          <p className="card-text">
            <a href="#" onClick={toggle}>
              Read more
            </a>
          </p>
          <PortfolioModal isShowing={isShowing} hide={toggle} item={item} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
