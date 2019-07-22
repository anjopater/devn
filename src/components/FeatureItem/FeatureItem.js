import React, { Component } from 'react'
import classnames from 'classnames';
import './FeatureItem.scss';

class FeatureItem extends Component {
    render() {
        const { logo, title, description, className } = this.props;
        return (
            <div className={classnames("feature-item", className)}>
                <img src={logo} />
                <h3>{title} </h3 >
                <p>{description}</p>
            </div>
        )
    }
}

export default FeatureItem;