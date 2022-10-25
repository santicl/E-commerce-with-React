import { useEffect, useState } from 'react';
import getAllProducts from '../helpers/getAllProducts';

function useCategory() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then((products) => {
                setProducts(products);
            })
    }, []);

    return {
        products
    }
}

export default useCategory;