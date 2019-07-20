import React, { Component } from 'react';
import imgHome from '../../assets/img/img-home.png';
import './Home.scss';
import Header from '../Header';
import FeatureItem from '../FeatureItem';
import DescriptionCard from '../DescriptionCard';

import logoAplicativos from '../../assets/icons/dev-app.svg';
import logoWeb from '../../assets/icons/web-system.svg';
import logoUX from '../../assets/icons/ui-ux-design.svg';
import logoAProjetos from '../../assets/icons/acceleration-projects.svg';
import logoWireframe from '../../assets/icons/wireframe.svg';
import logoDesign from '../../assets/icons/design.svg';
import logoIdeia from '../../assets/icons/idea.svg';

import logoTiCompanies from '../../assets/icons/ti-companies.svg';
import logoAgencies from '../../assets/icons/agencies.svg';
import logoStartup from '../../assets/icons/startups.svg';

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
                    <h2 className="title m-b-xl">Proceso de Desenvolvimento</h2>
                    <div className="content-proceso">
                     <DescriptionCard title="1 - Ideia" color="#ffc240" logo={logoIdeia} description="When you create an account, we remember exactly what you’ve read, so you always come right back where you left off. You also get notifications. when you create an account, we remember exactly what you’ve read, so you always come right back where you left off. you also get notifications"/>
                     <DescriptionCard title="2 - Wireframe" color="#4e9aff" logo={logoWireframe} description="When you create an account, we remember exactly what you’ve read, so you always come right back where you left off. You also get notifications.  When you create an account, we remember exactly what you’ve read, so you always come right back where you left off. you also get notifications"/>
                     <DescriptionCard title="3 - Design" color="#ff8b40" logo={logoDesign} description="When you create an account, we remember exactly what you’ve read, so you always come right back where you left off. You also get notifications. when you create an account, we remember exactly what you’ve read, so you always come right back where you left off. you also get notifications"/>
                    </div>
                </section>
                <section className="para-section">
                    <div className="content-para">
                     <h1>Nao deixa para depois, <br/>
                     deixa para os <br/>
                    <span>devninjas</span>
                     </h1>
                    </div>
                </section>
                <section className="areas-section">
                <div className="content-services">
                        <FeatureItem logo={logoTiCompanies} title="Empresa de T.I" description="Focados em alto desenpenho e aseguranca." />
                        <FeatureItem logo={logoAgencies} title="Para Agencias" description="Com interfaces clean e intuitivas." />
                        <FeatureItem logo={logoStartup} title="Startup's" description="Criamos a indentidade visual e pensamos na usabilidade e na experiencia do usuario." />
                    </div>
                </section>
            </div>
        )
    }
}
