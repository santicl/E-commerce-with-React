import DiscountOfert from "../../helpers/discountProducts";
import settings from "../../settings";

function Ofert(props) {
    return (
        <div title={props.title} key={props.id} className="Porcent">
            <span className={props.promoOrHot === "promo" ? " span Show" : "span No-show"}>- {DiscountOfert(props.price, props.specialPrice)}</span>
            <span className={props.promoOrHot !== "promo" ? " span-fire Show" : "span-fire No-show"}>
                {settings.iconFire}
            </span>
        </div>

    );
}

export default Ofert;