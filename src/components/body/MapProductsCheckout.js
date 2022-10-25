import { useContext } from "react";
import { StateContext } from "../../context/StateContext";

function MapProductsCheckout({ products, styles, path }) {
    const { handlerDelete } = useContext( StateContext );

    return (
        products.map(({ title, img, newPrice, count }, index) => {
            return (
                <div key={index} style={styles.cart} className="Cart-product">
                    <div style={styles.cartImg} className="Cart-product-img">
                        <img style={styles.img} src={path(`./${img}`)} />
                        <div style={styles.containerClose}>
                            <button onClick={(e) => handlerDelete(e, { title })} style={styles.btnClose}>
                                <svg style={styles.svg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div style={styles.info} className="Cart-product-info">
                        <p style={styles.title}>{title}</p>
                        <p style={styles.priceItem}> $ {new Intl.NumberFormat('es-ES').format(newPrice)}</p>
                        <div style={styles.btns}>
                            <button style={styles.btn}>-</button>
                            <p style={styles.p}>{count}</p>
                            <button style={styles.btn}>+</button>
                        </div>
                    </div>
                </div>
            )
        })
    );
}

export default MapProductsCheckout;