import React, { Component } from 'react'
import imgHome from '../../assets/img/img-home.png';
import './Home.scss';
import Header from '../Header';

export default class Home extends Component {

    render() {
        return (
            <div>
                <section className="servicios-section">
                    <Header className="m-space-8 "/>
                    <div className="flex-evenly m-space-8 " >
                        <p className="text-console content-text-36">Sua empresa focada no negócio.
                         A <span>devnijas</span> focada no desenvolvimento do aplicativo

                         <button className="button-primary display-flex m-t-md"> Conhece a devninjas</button>
                        </p>
                        <img className="img-home" src={imgHome} alt="" />
                    </div>
                </section>
                <section>
                </section>
            </div>
        )
    }
}
