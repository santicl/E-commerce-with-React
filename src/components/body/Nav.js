import CartItems from './component/CartItems';
import TourOpen from '../../img/TourOpen.jpg';
import settings from '../../settings';
import BtnLogin from './BtnLogin';
import { useState } from 'react';
import SearchPopup from '../popup/SearchPopup';
import useCategory from '../../hooks/useCategory';
import GetProductsPromo from '../../helpers/getProductsPromo';

function Nav() {
    const { products } = useCategory();
    const { promoProducts } = GetProductsPromo(products);

    const [active, setActive] = useState({
        item: [],
        show: false
    });


    const toggle = (e) => {
        setActive({
            show: !active.show,
            item: promoProducts.filter((item) => item.title === e.target.title)
        });
    }

    return (
        <div class="Container-navbar">
            <div class="Container-navbar_items">
                <img className='Brand-site' src={TourOpen} alt="Logo" width="100" height="40" />
                <div className='Container-navbar_list-r'>
                    <button className='Container-navbar_list-r_lenguaje'>
                        <span className='Lenguaje-text'>{settings.iconWorld} Idioma</span>
                        <span className='Icon-arrow-l'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-expand" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10z" />
                            </svg>
                        </span>
                    </button>

                    <button onClick={toggle} className='Search-containe4-icon'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </span>
                    </button>

                    <CartItems />

                    <ul>
                        <BtnLogin />
                        <li>
                            <a href="#">Inicio</a>
                        </li>
                        <li>
                            <a href="#">Sobre Nosotros</a>
                        </li>
                        <li>
                            <a href="#">Contactanos</a>
                        </li>
                    </ul>
                    <button className='Container-navbar_list-r_menu-icon No-show'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>
                </div>
            </div>
            <SearchPopup active={active} toggle={toggle} />
        </div>
    );
}

export default Nav;