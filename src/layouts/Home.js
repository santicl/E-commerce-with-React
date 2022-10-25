import { StateProvider } from '../context/StateContext';
import Nav from '../components/body/Nav';
import HeaderNav from '../components/body/HeaderNav';
import ShowCategory from '../components/categories/ShowCategory';
import ShowProducts from '../components/products/ShowProducts';
import HotAndPromoProducts from '../components/products/HotAndPromoProducts';
import Quotation from '../components/body/Quotation';
import Islands from '../components/body/Islands';
import Subscribe from '../components/body/Subscribe';
import Footer from '../components/body/Footer';

function Home() {

    return (
        <StateProvider >
            <div className="App">
                <Nav />
                <HeaderNav />
                <ShowCategory />
                <HotAndPromoProducts />
                <Quotation/>
                <Islands/>
                <Subscribe/>
                <ShowProducts />
                <Footer/>
            </div>
        </StateProvider >
    );
}

export default Home;