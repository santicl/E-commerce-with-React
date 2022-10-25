function GetAllCategories(products) {
    let categories = [];
    for (let i = 0; i < products.length; i++) {
        let category = products[i].category;
        if (!categories.includes(category)) {
            categories.push(category);
        }
    }

    return categories;
}

export default GetAllCategories;