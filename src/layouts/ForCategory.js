import { useParams } from "react-router";
import Stars from "../components/stars/Stars";

const path = require.context('../img', true);

function ForCategpry({ products }) {
    const { category } = useParams();
    const filteredProducts = products.filter((product) => product.category === category);

    return (
        <div className="Products-show-container">
            <div className="Product-section-title">
                <h2>
                    {category}
                </h2>
            </div>

            <div className="Container-products">
                {
                    filteredProducts.map(({ id, title, price, img, rank }) => (
                        <div key={id} role="button" title={title} className="Product">
                            <div className="Product-image">
                                <img src={path(`./${img}`)} alt="product" />
                            </div>
                            <div className="Product-info">
                                <div className="Title-description">
                                    <h3> {title} </h3>
                                    <Stars rank={rank} />
                                </div>
                                <div className="Price-hot">
                                    <span>$ {new Intl.NumberFormat('es-ES').format(price)}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ForCategpry;