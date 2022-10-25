import { useContext } from "react";
import { StateContext } from "../../context/StateContext";
import DataLogin from "./DataLogin";

function BtnLogin() {
    const { state, setState } = useContext( StateContext );


    return (
        <li>
            <span onClick={() => {
                state.stateLogin === false ? setState({ stateLogin: true }) : setState({ stateLogin: false })
            }} className='User-container'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='User' viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='Arrow-d' viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
            </span>
            <DataLogin/>
        </li>
    );
}

export default BtnLogin;