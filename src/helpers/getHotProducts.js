import useCategory from "../hooks/useCategory";

function GetHotProducts() {
    const { products } = useCategory();
    const productPromo = products.filter((product) => product.cantSales >= 20);
    return {
        productPromo,
        products
    };
}

export default GetHotProducts;