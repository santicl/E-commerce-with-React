import { useContext } from "react";
import { StateContext } from "../../context/StateContext";

function DataLogin() {
    const { state } = useContext( StateContext );


    return (
        <ul className={state.stateLogin === false ? "Dont" : "Login-container Do"}>
            <li>
                <a href="/signin">Sign in</a>
            </li>
            <li>
                <a href="/register">Register</a>
            </li>
        </ul>
    );
}

export default DataLogin;