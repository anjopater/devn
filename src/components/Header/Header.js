import React, { Component } from 'react'
import logo from '../../assets/img/logo-devninjas.png';
import { Link, animateScroll as scroll } from "react-scroll";
import './Header.scss';

export default class Header extends Component {

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (

            <div className="header-app">
                <div className="content-options">
                <img src={logo} alt="logo dev ninja" onClick={this.scrollToTop}/>
                <ul>
                    <li>
                    <Link
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Home
                    </Link>
                    </li>
                    <li>
                    <Link
                        activeClass="active"
                        to="section2"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Servicios
                    </Link>
                    </li>
                    <li>
                    <Link
                        activeClass="active"
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Desenvolvimento de Projetos
                    </Link>
                    </li>
                    <li>
                    <Link
                        activeClass="active"
                        to="section4"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Orçamento
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
        )
    }
}
