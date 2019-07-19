import React, { Component } from 'react';
import './DescriptionCard.scss';

class DescriptionCard extends Component {
    render() {
        const { logo, title, description, color } = this.props;

        const titleStyle = {
            color: color
        }

        const separatorStyle = {

        }

        return (
            <div className="description-card">
                <img src={logo} />
                <h2 style={titleStyle} >{title}</h2>
                <hr style={separatorStyle}></hr>
                <p>
                    {description}
                </p>
            </div>
        )
    }
}

export default DescriptionCard;
