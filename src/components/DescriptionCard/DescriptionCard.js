import React, { Component } from 'react';
import './DescriptionCard.scss';

class DescriptionCard extends Component {
    render() {
        const { logo, title, description, color } = this.props;

        const titleStyle = {
            color: color
        }

        const separatorStyle = {
            border: `1px solid ${color}`
        }

        return (
            <div className="description-card">
                <img src={logo} />
                <h2 style={titleStyle} >{title}</h2>
                <hr style={separatorStyle}></hr>
                <p className="m-t-30">
                    {description}
                </p>
            </div>
        )
    }
}

export default DescriptionCard;
