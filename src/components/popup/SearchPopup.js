import { Component } from "react";
import SearchContent from "./SearchContent";
import Portal from "./Portal";

export default class SearchPopup extends Component {

    render() {
        const { children, toggle, active } = this.props;
        const { show } = active;

        return (
            <Portal>
                {
                    show && (
                        <SearchContent toggle={toggle} children={children} />
                    )
                }
            </Portal>
        )
    }
}