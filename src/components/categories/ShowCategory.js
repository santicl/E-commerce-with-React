import useCategory from "../../hooks/useCategory";
import GetAllCategories from "../../helpers/getAllCategoryProducts";
import settings from "../../settings";
import { Link } from "react-router-dom";

function ShowCategory() {
    const { products } = useCategory();

    const categories = GetAllCategories(products);

    const getNumberTours = (category, products) => {
        return products.filter((product) => product.category === category).length;
    }

    return (
        <div className="Category-container">
            <div className="Category-container_title">
                <h2>Por Categoria</h2>
            </div>
            <div className="Arrow-left-icon">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                </button>
            </div>
            <div className="Category-container_carrousel">
                <div className="Category-container_carrousel_container">
                    {
                        categories.map(category => {
                            return (
                                <Link to={`/category/${category}`} key={category} className="carrousel-item">
                                    <div className="Icon-category">
                                        {settings[category]}
                                    </div>
                                    <div className="Info-item">
                                        <h2>{category}</h2>
                                        <p>{getNumberTours(category, products)} Tours</p>
                                    </div>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
            <div className="Arrow-right-icon">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default ShowCategory;