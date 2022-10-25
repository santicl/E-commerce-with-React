import React, { Component } from "react";
import FormPopup from "./FormPopup";
import Tags from "../body/component/Tags";
import Portal from "./Portal";

const path = require.context('../../img', true);

export default class Popup extends Component {
    render() {
        const { children, toggle, active } = this.props;
        const { item, show } = active;
        const { title, include, img, specialPrice } = item[0] || {};
        var newPrice = specialPrice;
        var count = 1;


        return (
            <Portal>
                {

                    show && (
                        <div className="Popup-comtainer" >
                            <div className="Popup-comtainer_content">
                                <div className="Img-popup">
                                    <img src={path(`./${img}`)} />
                                </div>
                                <div className="Container-info">
                                    <div className="Title-popup">
                                        <h3>
                                            {title}
                                        </h3>
                                    </div>
                                    <div className="Hashtag-popup">
                                        {
                                            include.map((item, index) => {
                                                return (
                                                    <Tags name={item} i={index} />
                                                );
                                            })
                                        }
                                    </div>
                                    <FormPopup
                                        children={children}
                                        title={title}
                                        img={img}
                                        newPrice={newPrice}
                                        count={count}
                                        specialPrice={specialPrice}
                                    />
                                    <button onClick={toggle} className="Button-close">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Portal>
        )
    }
}