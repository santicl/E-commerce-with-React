function GetProductsPromo(products) {
    let promoProducts = [];
    products.map(product => {
        if (product.promo) {
            promoProducts.push(product);
        }
    });

    return {
        promoProducts
    };
}

export default GetProductsPromo;