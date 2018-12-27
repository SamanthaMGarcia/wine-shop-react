import React from 'react';

const WineCard = ({ wine }) => (
  <div key={wine.id} className="WineCard">
    <h3>{wine.name}</h3>
    <p>Year: ${wine.year}</p>
    <p>Price: ${wine.price}</p>
    <img className="WineImage" src={wine.img_url} alt={wine.name} />
  </div>
)

export default WineCard;
