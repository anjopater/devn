import React, { Component } from 'react'
import logo from '../../assets/img/logo-devninjas.png';
import './Header.scss';

export default class Header extends Component {
    render() {
        return (

            <div className="header-app">
                <img src={logo} alt="" />
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Servicios</a>
                    </li>
                    <li>
                        <a href="#">Desenvolvimento de Projetos</a>
                    </li>
                    <li>
                        <a href="#">Orçamento</a>
                    </li>
                </ul>
            </div>
        )
    }
}
