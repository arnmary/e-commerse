import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Main.css';
// import { CartContext } from '../CartContext';
import { useCart } from '../CartContext';

export default function Header() {
  const{cart} = useCart();
  return (
    <div>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light" aria-label="Main navigation">
          <div className="container-fluid">
            <div className="brand p-1rem">
              <Link className="navbar-brand" to="/">
                <img src="./logo.png" alt="logo img" id="logo" className='logoImg'/>
              </Link>
              <h1 id="mainTitle" className="display-4 fw-bold color-text-indigo">
                PetsMania
              </h1>
            </div>

            <button
              className="navbar-toggler p-0 border-0"
              type="button"
              id="navbarSideCollapse"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/home" id="">
                   Головна
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/about" id="about">
                    Про нас
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacts">
                    <FontAwesomeIcon icon="fa-solid fa-phone" id="contacts" />
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    <FontAwesomeIcon icon="fa-solid fa-basket-shopping" />
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/delivery">
                    Доставка та оплата
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Каталог товарів
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/catalog/dogs">Собакам</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/catalog/cats">Котам</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/catalog/birds">Птахам</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/catalog/rodents">Гризунам</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/catalog/aquarium">Акваріум</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/catalog/terrarium">Терраріум</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/catalog/brands">Бренди</Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <button className='rounded rounded-5 bg-warning border-0 py-1 mx-3 '>
            
              <Link className="nav-link" to="/cart">
                    <FontAwesomeIcon icon="fa-solid fa-basket-shopping" />{cart.length}
                  </Link>
                  
              </button>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              </form>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}