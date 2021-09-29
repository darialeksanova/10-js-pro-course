import React from 'react';
import './ServicesList.css';

type Props = {
  servicesList: string[];
};

function ServicesList({servicesList}: Props) {
  return (
    <ul className='services-list'>
      {servicesList.map( (listItem, index) => 
        <li key={index} className='services-list__item'>
          <div className='services-list__item-icon'>&#9745;</div>
          <div className='services-list__item-text'>{listItem}</div>
        </li>
      )}
    </ul>
  );
}

export default ServicesList;
