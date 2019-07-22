import React, { Component } from 'react'
import classnames from 'classnames';
import './ContentFields.scss';

class ContentFields extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasOpacity: true
        };
    }

    removeOpacity = () => {
        this.setState({ hasOpacity: false });
    }

    render() {
        const { className, children } = this.props;
        return (
            <div className={classnames("content-fields", className, this.state.hasOpacity ? 'do-opacity' : '')} onClick={this.removeOpacity} >
                {children}
            </div>
        )
    }
}

export default ContentFields;