import { useContext } from "react";
import { StateContext } from "../../context/StateContext";

function FormPopup({ children, title, img, newPrice, count, specialPrice }) {
    const { handlerSubmit } = useContext(StateContext);

    const handlerChange = (e) => {
        count = parseInt(e.target.value);
        newPrice = parseInt(specialPrice) * parseInt(count);
        let doc = document.getElementById("newPrice");
        doc.innerHTML = "$ " + new Intl.NumberFormat('es-ES').format(newPrice);
    }

    return (
        <form onSubmit={(e) => handlerSubmit(e, { title, img, newPrice, count, specialPrice })}>
            <div className="Inputs-popup">
                <input onChange={handlerChange} type="number" placeholder="Ingresa numero de personas" required />
            </div>
            <div className="Button-container-pay">
                <span className="Show-price">
                    <span id="newPrice">$ {new Intl.NumberFormat('es-ES').format(newPrice)} </span>
                </span>
                <button className="Button-Price">
                    Add cart
                </button>
                {children}
            </div>
        </form>
    );
}

export default FormPopup;