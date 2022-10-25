import React, { createContext, useEffect, useState } from "react";

const StateContext = createContext();

const StateProvider = ({ children }) => {
    const [state, setState] = useState(0);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("cart")) || [];
        setState(data.length);
    }, [state]);


    const handlerSubmit = (e, { title, img, newPrice, count }) => {
        e.preventDefault();

        let item = {
            title,
            img,
            newPrice,
            count
        }

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        console.log("cart", cart);

        if (cart === []) {
            cart.push(item);
        } else {
            let index = cart.findIndex((item) => item.title === title);
            if (index === -1) {
                cart.push(item);
            } else {
                cart[index].count = parseInt(cart[index].count) + parseInt(count);
                cart[index].newPrice = cart[index].newPrice + parseInt(newPrice);
            }
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        setState(cart.length);
    }

    const handlerDelete = (e, { title }) => {
        e.preventDefault();

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let index = cart.findIndex((item) => item.title === title);
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        setState(cart.length);
    }



    return (
        <StateContext.Provider value={{
            state,
            setState,
            handlerSubmit,
            handlerDelete
        }}>
            {children}
        </StateContext.Provider>
    );
}

export { StateContext, StateProvider };