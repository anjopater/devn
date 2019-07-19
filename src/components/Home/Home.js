import React, { Component } from 'react';
import imgHome from '../../assets/img/img-home.png';
import './Home.scss';
import Header from '../Header';
import FeatureItem from '../FeatureItem';
import DescriptionCard from '../DescriptionCard';

import logoAplicativos from '../../assets/icons/dev-app.svg';
import logoWeb from '../../assets/icons/web-system.svg';
import logoUX from '../../assets/icons/ui-ux-design.svg';
import logoAProjetos from '../../assets/icons/acceleration-projects.svg'


import logoIdeia from '../../assets/icons/idea.svg';

export default class Home extends Component {

    render() {
        return (
            <div>
                <section className="home-section">
                    <Header className="m-space-8" />
                    <div className="flex-evenly m-space-8 align-end" >
                        <p className="text-console content-text-36">Sua empresa focada no negócio.
                        <br /> A <span>devnijas</span> focada no desenvolvimento do aplicativo
    
                         <button className="button-primary display-flex m-t-xl"> Conhece a devninjas</button>
                        </p>
                        <img className="img-home" src={imgHome} alt="" />
                    </div>
                </section>
                <section className="servicio-section">
                    <h2 className="title m-b-xl">Aqui se faz, aqui se cira ;)</h2>
                    <div className="content-services">
                        <FeatureItem logo={logoAplicativos} title="Desenvolvimento de Aplicativos" description="Focados em alto desenpenho e aseguranca." />
                        <FeatureItem logo={logoWeb} title="Sistemas Web Sobdemanda" description="Com interfaces clean e intuitivas." />
                        <FeatureItem logo={logoUX} title="UI/UX Design" description="Criamos a indentidade visual e pensamos na usabilidade e na experiencia do usuario." />
                        <FeatureItem logo={logoAProjetos} title="Acelecacao de Projetos" description="Acelere seu proceso de inovacao." />
                    </div>
                </section>
                <section className="proceso-section">
                    <h2 className="title m-b-xl">Proceso de desenvolvimento</h2>
                    <div className="content-proceso">
                     <DescriptionCard title="1 - Ideia" color="yellow" logo={logoIdeia} description="When you create an account, we remember exactly what you’ve read, so you always come right back where you left off. You also get notifications."/>
                    </div>
                </section>

            </div>
        )
    }
}
