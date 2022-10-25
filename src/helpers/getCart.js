const getCart = async () => {
    const cart = await localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(cart);
    }
    return [];
}

export default getCart;