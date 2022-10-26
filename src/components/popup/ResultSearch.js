import useCategory from "../../hooks/useCategory";

const path = require.context('../../img', true);

function ResultSearch({ keyword, show }) {
    const { products } = useCategory();

    const handlerSearch = () => {
        const result = keyword === ''
            ? ''
            : products.filter((product) => product.title.toLowerCase().includes(keyword.toLowerCase()));
        return result;
    }


    return (
        <>
            {
                show && (
                    <div className="Result-search">
                        {
                            keyword === '' ? <h1>Haga su busqueda</h1>
                                : handlerSearch().map((item, index) => (
                                    <div key={index} className="Result-search-item">
                                        <img src={path(`./${item.img}`)} alt={item.title} />
                                        <div className="Result-search-item-info">
                                            <h3>{item.title}</h3>
                                            <p>$ {new Intl.NumberFormat('es-ES').format(item.price)}</p>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                )
            }
        </>
    );
}

export default ResultSearch;