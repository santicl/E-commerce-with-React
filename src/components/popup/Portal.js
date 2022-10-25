import React, { Component } from "react";
import { createPortal } from "react-dom";

const body = document.getElementById('modals');

export default class Portal extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }
    
    componentDidMount() {
        document.body.appendChild(this.el);
    }
    
    componentWillUnmount() {
        document.body.removeChild(this.el);
    }
    
    render() {
        return createPortal(this.props.children, this.el);
    }
}