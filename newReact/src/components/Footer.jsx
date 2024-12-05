import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const nowYear = new Date().getFullYear();
    const dataInfo = `© ${nowYear}`;
    const menuItems = [
        { name: 'Головна', to: '/home' },
        { name: 'Договір оферти', to: '/offer' },
        { name: 'Доставка та оплата', to: '/delivery' },
        { name: 'Часті запитання', to: '/faq' },
        { name: 'Про нас', to: '/about' },
    ];

    return (
        <footer className="footerContainer container-fluid py-3 my-4 color-bng-indigo">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                {menuItems.map((item, index) => (
                    <li className="nav-item" key={index}>
                        <Link className="nav-link active link-secondary link-body-emphasis inter-400" to={item.to}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="text-center">
                <img src="/card1.png" alt="Card" className="footerImage" />
                <img src="/visa.png" alt="Visa" className="footerImage" />
            </div>
            <p className="text-center text-body-secondary inter-400">
                {dataInfo} Зоомагазин PetsMania, усі права захищені.
            </p>
        </footer>
    );
}
