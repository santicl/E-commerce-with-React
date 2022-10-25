import { useContext, useState } from "react";
import { StateContext } from "../../../context/StateContext";
import Cart from "../Cart";

function CartItems() {
    const { state } = useContext(StateContext);

    const [active, setActive] = useState(false);


    const toggle = () => {
        setActive(!active);
    }
    return (
        <div className='Container-navbar_list-r_carts'>
            <span className='Icon-shop'>
                <svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
            </span>
            <Cart toggle={toggle} active={active} />
            <div className={state === 0 ? 'Number-cart' : 'cart-carts'} >
                <span className={state === 0 ? '' : 'cart-span'}  ></span>
                <div className={state === 0 ? '' : "Container-cart-spinner"} >
                    {state}
                </div>
            </div>
        </div>
    );
}

export default CartItems;