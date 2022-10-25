function filteredProducts( currPage, products ) {
    return products.slice(currPage, currPage + 4);
}

export default filteredProducts;