import React, { Component } from 'react'
import classnames from 'classnames';
import './Footer.scss';

class Footer extends Component {
    render() {
        const { logo, className } = this.props;
        return (
            <div className={classnames("footer", className)}>
                <img src={logo} />
                <div>contato@devninja.com.br</div>
                <div>44 3123-8848</div>
                <div className="small">Av. Monteiro Lobato, 1214 - Zona 08, Maringà - PR, 87050-280</div>
                <div className="small diga-message">Nao diga "alè", diga "como vao, ninjas?"</div>
            </div>
        )
    }
}

export default Footer;