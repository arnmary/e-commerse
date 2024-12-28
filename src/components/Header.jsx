import React from 'react';
import { Link,} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Main.css';
import { useCart } from '../CartContext';

export default function Header() {
  const{cart} = useCart();
  return (
    <div>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light" aria-label="Main navigation">
          <div className="container-fluid">
            <div className="brand p-1rem">
              <Link className="navbar-brand" to="/home">
                <img src="./logo.png" alt="logo img" id="logo" className='logoImg'/>
              </Link>
              <h1 id="mainTitle" className="display-4 fw-bold inter-700">
                PetsMania
              </h1>
            </div>
            <button
              className="navbar-toggler p-0 border-0"
              type="button"
              id="navbarSideCollapse"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExampleDefault"
              aria-controls="navbarsExampleDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse  offcanvas-collapse" id="navbarsExampleDefault">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <Link className="nav-link active inter-500" aria-current="page" to="/home" id="homePage">
                   Головна
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active inter-500" aria-current="page" to="/about" id="about">
                    Про нас
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacts">
                    <FontAwesomeIcon icon="fa-solid fa-phone" id="contacts" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link inter-500" to="/delivery">
                    Доставка та оплата
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle inter-500"
                    to="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Каталог товарів
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item inter-400" to="/catalog/dogs">Собакам</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item inter-400" to="/catalog/cats">Котам</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item inter-400" to="/catalog/birds">Птахам</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item inter-400" to="/catalog/rodents">Гризунам</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item inter-400" to="/catalog/aquarium">Акваріум</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item inter-400" to="/catalog/terrarium">Терраріум</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item inter-400" to="/catalog/brands">Бренди</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
      <button className='rounded rounded-5 bg-warning border-0 py-1 mx-3 ' id='basket'>
        <Link className="nav-link" to="/cart">
          <FontAwesomeIcon icon="fa-solid fa-basket-shopping" />{cart.length}
        </Link> 
     </button>
          </div>
        </nav>
      </header>
    </div>
  );
}