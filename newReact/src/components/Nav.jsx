import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  const links = [
    { value: 'Котам', link: '/catalog/cats' },
    { value: 'Собакам', link: '/catalog/dogs' },
    { value: 'Гризунам', link: '/catalog/rodents' },
    { value: 'Птахам', link: '/catalog/birds' },
    { value: 'Акваріум', link: '/catalog/aquarium' },
    { value: 'Тераріум', link: '/catalog/terrarium' },
    { value: 'Бренди', link: '/catalog/brands' },
  ];

  const linkEl = links.map((item, index) => (
    <Link 
      key={index} 
      className="mt-5 me-3 py-2 link-body-emphasis text-decoration-none btn btn-outline-warning icon-link icon-link-hover " 
      to={item.link}>
      {item.value}
    </Link>
  ));

  return (
    <div>
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        {linkEl}
      </div>
      
    </div>
  );
}


