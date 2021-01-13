import React from 'react';
import { createPortal } from 'react-dom';

export default class Portal extends React.Component {
    constructor(props) {
        super(props);
        this.node = document.createElement('div');
    }

    componentDidMount() {
        this.containerNode = this.getContainer();
        if (this.containerNode) {
            this.containerNode.appendChild(this.node);
        }
    }

    componentWillUnmount() {
        if (this.containerNode) {
            this.containerNode.removeChild(this.node);
        }
        this.containerNode = null;
    }

    getContainer() {
        const { containerId } = this.props;

        let container;
        if (containerId) {
            container = document.getElementById(containerId);
        }

        return container || document.body;
    }

    render() {
        const { children } = this.props;
        return createPortal(children, this.node);
    }
}
