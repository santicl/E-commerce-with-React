import HotProducts from "./HotProducts";
import PromoContainer from "../flash-sale-component/PromoContainer";

function HotAndPromoProducts() {
    return (
        <div className="Hot-and-promo">
            <PromoContainer />
            <HotProducts/>
        </div>
    );
}

export default HotAndPromoProducts;