import React, { Component } from 'react';
import imgHome from '../../assets/img/img-home.png';
import Header from '../Header';
import FeatureItem from '../FeatureItem';
import DescriptionCard from '../DescriptionCard';
import FormEnviar from '../FormEnviar';
import Footer from '../Footer';

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
import logoFooter from '../../assets/img/logo-devninjas-color.png';

import './Home.scss';

export default class Home extends Component {

    render() {
        return (
            <div>
                <Header />
                <section id="section1" className="home-section">
                    <div className="flex-evenly align-center" >
                        <p className="text-console">Sua empresa focada no negócio.
                        <br /> A <span>devnijas</span> focada no desenvolvimento do aplicativo
                         <button className="button-primary display-flex m-t-xl"> Conhece a devninjas</button>
                        </p>
                        <img className="img-home" src={imgHome} alt="" />
                    </div>
                </section>
                <section id="section2" className="servicio-section">
                    <h2 className="title m-b-xl">Aqui se faz, aqui se cira ;)</h2>
                    <div className="content-services">
                        <FeatureItem logo={logoAplicativos} title="Desenvolvimento de Aplicativos" description="Focados em alto desenpenho e aseguranca." />
                        <FeatureItem logo={logoWeb} title="Sistemas Web Sobdemanda" description="Com interfaces clean e intuitivas." />
                        <FeatureItem logo={logoUX} title="UI/UX Design" description="Criamos a indentidade visual e pensamos na usabilidade e na experiencia do usuario." />
                        <FeatureItem logo={logoAProjetos} title="Acelecacao de Projetos" description="Acelere seu proceso de inovacao." />
                    </div>
                </section>
                <section id="section3" className="proceso-section">
                    <h2 className="title m-b-xl">Proceso de Desenvolvimento</h2>
                    <div className="content-proceso">
                        <DescriptionCard title="1 - Ideia" color="#ffc240" logo={logoIdeia} description="Uma ideia é o primeiro e mais óbvio dos actos da percepção pelo facto de se limitar ao simples conhecimento de algo. Trata-se de uma imagem ou representação mental de um objecto.
A ideia é também o conhecimento puro." />
                        <DescriptionCard title="2 - Wireframe" color="#4e9aff" logo={logoWireframe} description="Wireframe é um desenho básico, como um esqueleto, que demonstra de forma direta a arquitetura de como o objeto (interface, página da internet, modelo, etc.) final será de acordo com as especificações relatadas." />
                        <DescriptionCard title="3 - Design" color="#ff8b40" logo={logoDesign} description="El diseño1​ se define como el proceso previo de configuración mental, «prefiguración», en la búsqueda de una solución en cualquier campo. Se aplica habitualmente en el contexto de la industria, ingeniería, arquitectura, comunicación y otras disciplinas que requieren creatividad." />
                    </div>
                </section>
                <section className="para-section">
                    <div className="content-para">
                        <h1>Nao deixa para depois, <br />
                            deixa para os <br />
                            <span>devninjas</span>
                        </h1>
                    </div>
                </section>
                <section className="areas-section">
                    <div className="content-services">
                        <FeatureItem className="feature-item-areas" logo={logoTiCompanies} title="Empresa de T.I" description="Focados em alto desenpenho e aseguranca." />
                        <FeatureItem className="feature-item-areas" logo={logoAgencies} title="Para Agencias" description="Com interfaces clean e intuitivas." />
                        <FeatureItem className="feature-item-areas" logo={logoStartup} title="Startup's" description="Criamos a indentidade visual e pensamos na usabilidade e na experiencia do usuario." />
                    </div>
                </section>
                <section id="section4">
                    <FormEnviar />
                </section>
                <section className="gostou-section">
                    <div className="content-gostou">
                        <h1>Gostou da gente?</h1>
                        <h2>Vamos bater um papo. O catè è por nossa conta!</h2>
                        <p>Ou manda um e-mail, whats, carta, pombo correio, sinal de fumaca...)</p>
                    </div>
                </section>
                <Footer logo={logoFooter} />
            </div>
        )
    }
}
