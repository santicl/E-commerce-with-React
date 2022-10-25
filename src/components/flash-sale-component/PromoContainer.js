import GetProductsPromo from "../../helpers/getProductsPromo";
import useCategory from "../../hooks/useCategory";
import Ofert from "./OfertProducts";
import CounterComponent from "../body/component/CounterComponent";
import { useState } from "react";
import filteredProducts from "../../helpers/getProductsFilter";
import Stars from "../stars/Stars";
import Popup from "../popup/Popup";

const path = require.context('../../img', true);

function PromoContainer() {
    const { products } = useCategory();
    const [currPage, setCurrPage] = useState(0);
    const { promoProducts } = GetProductsPromo(products);
    const filterProducts = filteredProducts(currPage, promoProducts);
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

    const nextPage = () => {
        if (currPage === promoProducts.length - 1) {
            setCurrPage(promoProducts.length - 1);
        } else {
            setCurrPage(currPage + 4);
        }
    }

    const prevPage = () => {
        if (currPage > 0)
            setCurrPage(currPage - 4);
    }

    return (
        <div className={promoProducts.length > 0 ? "Flash-sales Show" : "No-show"}>
            <div className="Products-show-container flash">
                <div className="Product-section-title">
                    <h2>
                        Flash Sales
                    </h2>
                    <CounterComponent />
                </div>

                <div className="Arrowa-buttons">
                    <button className="Arrow-button-left" onClick={prevPage}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </button>
                    <button className="Arrow-button-right" onClick={nextPage}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>

                </div>

                <div className="Container-products">
                    {
                        filterProducts.map(({ id, title, price, img, specialPrice, rank }) => {
                            return (
                                <div onClick={toggle} key={id} role="button" title={title} className="Product promo-items">
                                    <Ofert title={title} price={price} specialPrice={specialPrice} promoOrHot="promo" idOfert={id} />
                                    <div title={title} className="Product-image">
                                        <img title={title} src={path(`./${img}`)} alt="product" />
                                    </div>
                                    <div title={title} className="Product-info">
                                        <div title={title} className="Title-description">
                                            <h3 title={title}> {title} </h3>
                                            <Stars rank={rank} />
                                        </div>
                                        <div title={title} className="Price">
                                            <span title={title} className="Price-cart-promo">
                                                $ {new Intl.NumberFormat('es-ES').format(specialPrice)}
                                            </span>

                                            <span title={title} className="Price-cart">
                                                $ {new Intl.NumberFormat('es-ES').format(price)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Popup active={active} toggle={toggle} />
        </div>
    );
}

export default PromoContainer;