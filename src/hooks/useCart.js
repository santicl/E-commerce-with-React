import { useEffect, useState } from "react";
import getCart from "../helpers/getCart";

function useCart(key, iValue) {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        getCart().then((result) => {
            setCarts(result);
        }).catch((err) => {
            new Error(err);
        });
    }, []);


    return {
        carts
    }
}

export default useCart;