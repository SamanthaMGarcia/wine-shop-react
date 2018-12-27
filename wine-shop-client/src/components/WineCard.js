import React from 'react';

const WineCard = ({ wine }) => (
  <div key={wine.id} className="WineCard">
    <h3>{wine.name}</h3>
    <p>Price: ${surfboard.price}</p>
    <img className="SurfboardImage" src={surfboard.img_url} alt={surfboard.name} />
    <p>Length: {surfboard.length} inches</p>
  </div>
)

export default SurfboardCard;
