import { Component } from "react";
import Portal from "../popup/Portal";
import TourOpen from '../../img/TourOpen.jpg';
import MapProductsCheckout from "./MapProductsCheckout";

const path = require.context('../../img', true);

export default class Cart extends Component {
    render() {
        const { toggle, active } = this.props;

        const getCarts = () => {
            return JSON.parse( localStorage.getItem('cart') || [] );
        }


        const products = getCarts();
        console.log("ento al cart", products);

        const getTotals = () => {
            let total = 0;
            getCarts().forEach(cart => {
                total += cart.newPrice;
            });
            return total;
        }


        return (
            <Portal>
                {
                    active && (
                        <div style={styles.container} className="Cart-container">
                            <div style={styles.containerS} className="Container-S">
                                <div className="Cart-c">
                                    <img src={TourOpen} />
                                </div>
                                <div style={styles.containerCart}>
                                    <h3 style={styles.h3}>Carrito de compras</h3>
                                    <div style={styles.carts} className="Carts" >
                                        <MapProductsCheckout styles={styles} products={products} path={path} />
                                    </div>
                                    <div style={styles.containerBtnCheckout}>
                                        <span>Pasar por checkout</span>
                                        <button style={styles.btnCheckout}>$ {new Intl.NumberFormat('es-ES').format(getTotals())}</button>
                                    </div>
                                </div>
                            </div>
                            <div style={styles.btnCloseCart} onClick={toggle}>x</div>
                        </div>
                    )
                }
            </Portal>
        )
    }
}

const styles = {
    container: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        scrollY: 'disabled',
        zIndex: 9999,
    },
    containerS: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '10%',
        height: '100%'
    },
    btnCloseCart: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#000'
    },
    containerCart: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        marginTop: '10%',
        backgroundColor: '#fff',
        zIndex: 9999,
    },
    carts: {
        width: '90%',
        padding: '0',
        margin: '0',
    },
    cart: {
        width: '100%',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '8px auto',
        padding: '0',
        alignItems: 'center',
        backgroundColor: 'rgb(238, 233, 233)',
        borderRadius: '10px',
    },
    cartImg: {
        width: '80px',
        height: 'auto',
        objectFit: 'cover',
        position: 'relative'
    },
    img: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        borderRadius: '10px',
    },
    info: {
        width: '81%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto'
    },
    btns: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100px',
        height: '30px',
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: '5px',
        padding: '5px',
        margin: '0 10px'
    },
    p: {
        margin: '0 10px'
    },
    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        height: '25px',
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '20px',
        fontWeight: 'bold'
    },
    h3: {
        fontSize: '30px',
        fontWeight: 'bold',
        color: '#000',
        marginBottom: '30px'
    },
    title: {
        width: '100%',
        fontSize: '15px',
        fontWeight: 'bold',
        color: '#000',
        margin: '0'
    },
    priceItem: {
        width: '40%',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#000',
        margin: '0 10px'
    },
    containerBtnCheckout: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        height: '40px',
        padding: '0 10px',
        backgroundColor: '#000',
        fontSize: '15px',
        fontWeight: 'bold',
        borderRadius: '10px',
    },
    btnCheckout: {
        width: '40%',
        height: 'auto',
        backgroundColor: '#fff',
        color: '#000',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '15px',
        fontWeight: 'bold'
    },
    containerClose: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        cursor: 'pointer',
        fontSize: '20px',
        backgroundColor: 'rgb(218, 214, 214, 0.2)'
    },
    btnClose: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '25px',
        height: '25px',
        cursor: 'pointer',
        fontWeight: 'bold',
        color: '#000',
        border: 'none',
        backgroundColor: '#fff',
        borderRadius: '50%',
        padding: '10px'
    },
    svg: {
        width: '50px',
        height: '50px',
    }
}