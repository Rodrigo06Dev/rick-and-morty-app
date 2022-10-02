import React from 'react'
import '../styles/LocationInfo.css'

const LocationInfo = ({location}) => {
    console.log(location?.residents);
  return (
    <div className='content__info'>
        <h2 className='info__title'>{location?.name}</h2>
        <ul className='info__list'>
            <li className='info__item'><span>Type:</span>{location?.type}</li>
            <li className='info__item'><span>Dimension: </span>{location?.dimension}</li>
            <li className='info__item'><span>Population: </span>{location?.residents.length}</li>
        </ul>
    </div>
  )
}

export default LocationInfo