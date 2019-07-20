import React, { Component } from 'react'
import classnames from 'classnames';
import './ContentFields.scss';

class ContentFields extends Component {
    render() {
        const { className, children } = this.props;
        return (
            <div className={classnames("content-fields", className)}>
              {children}
            </div>
        )
    }
}

export default ContentFields;