import useCategory from '../../hooks/useCategory';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCVD2Tcq46_VXNR0kdTL0ZAE3iIPz7D1HE",
  authDomain: "api-tours.firebaseapp.com",
  databaseURL: "https://api-tours-default-rtdb.firebaseio.com",
  projectId: "api-tours",
  storageBucket: "api-tours.appspot.com",
  messagingSenderId: "509277827663",
  appId: "1:509277827663:web:5f3be48d01307b17d8703a",
  measurementId: "G-3EQQ9X2EVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const path = require.context('../../img', true);

function ShowProducts() {
    const { products } = useCategory();


    return (
        <div className="Products-show-container">
            <div className="Product-section-title">
                <h2>
                    Tours
                </h2>
            </div>

            <div className="Container-products">
                {
                    products.map(({ id, title, price, img }) => {
                        return (
                            <div key={id} role="button" title={title} className="Product">
                                <div className="Product-image">
                                    <img src={path(`./${img}`)} alt="product" />
                                </div>
                                <div className="Product-info">
                                    <div className="Title-description">
                                        <h3> {title} </h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                                    </div>
                                    <div className="Price-hot">
                                        <span>$ {new Intl.NumberFormat('es-ES').format(price)}</span>
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

export default ShowProducts;