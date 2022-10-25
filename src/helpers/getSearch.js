function getSearch(letter, products) {
    const find = letter.toLowerCase();
    const search = [];
    for (let i = 0; i < products.length; i++) {
        const title = products[i].title.toLowerCase();
        if (title.indexOf(find) !== -1) {
            search.push(products[i]);
        }
    }
    return search;
}

export default getSearch;