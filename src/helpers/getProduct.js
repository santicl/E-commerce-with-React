function getProduct(products, title) {
    products = products.filter((product) => product.title === title);
    return products;
}

export default getProduct;