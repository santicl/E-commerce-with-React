import GetHotProducts from "./getHotProducts";
import getProduct from "./getProduct";

const handlerClickOnProduct = (e) => {
    const { products } = GetHotProducts();
    const product = getProduct(products, e.target.id);
    alert(`You have selected ${product.title}`);
}

export default handlerClickOnProduct;