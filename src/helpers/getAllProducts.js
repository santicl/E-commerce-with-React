const getAllProducts = async () => {
    const res = await fetch('https://api-tours-default-rtdb.firebaseio.com/tours.json');
    const data = await res.json();
    return data;
}

export default getAllProducts;