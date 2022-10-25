import GetHotProducts from "../../helpers/getHotProducts";
import Ofert from "../flash-sale-component/OfertProducts";
import Stars from "../stars/Stars";

const path = require.context('../../img', true);

function HotProducts() {
    const { productPromo } = GetHotProducts();

    return (
        <div className="Products-show-container">
            <div className="Product-section-title">
                <h2>
                    Hot Tours
                </h2>
            </div>

            <div className="Container-products">
                {
                    productPromo.map(({ id, title, price, img, specialPrice, rank }) => {
                        return (
                            <div key={id} role="button" title={title} className="Product promo-items">
                                <Ofert price={price} specialPrice={specialPrice} promoOrHot="top" />
                                <div className="Product-image">
                                    <img src={path(`./${img}`)} alt="product" />
                                </div>
                                <div className="Product-info">
                                    <div className="Title-description">
                                        <h3> {title} </h3>
                                        <Stars rank={rank} />
                                    </div>
                                    <div className="Price-hot">
                                        <span>$ {new Intl.NumberFormat('es-ES').format(price)} COP </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default HotProducts;
