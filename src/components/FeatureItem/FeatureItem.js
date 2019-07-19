import React, { Component } from 'react'
import './FeatureItem.scss';

class FeatureItem extends Component {
    render() {
        const { logo, title, description } = this.props;
        return (
            <div className="feature-item">
              <img src={logo} />
              <h3>{title} </h3 >
              <p>{description}</p>
            </div>
        )
    }
}

export default FeatureItem;