import React, { Component } from 'react';
import imgHome from '../../assets/img/img-home.png';
import './Home.scss';
import Header from '../Header';
import FeatureItem from '../FeatureItem';
import DescriptionCard from '../DescriptionCard';
import ContentFields from '../ContentFields';
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

export default class Home extends Component {

    render() {
        return (
            <div>
                <Header className="m-space-8" />
                <section id="section1" className="home-section">
                    <div className="flex-evenly m-space-8 align-center" >
                        <p className="text-console content-text-36">Sua empresa focada no negócio.
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
                        <DescriptionCard title="1 - Ideia" color="#ffc240" logo={logoIdeia} description="When you create an account, we remember exactly what you’ve read, so you always come right back where you left off. You also get notifications. when you create an account, we remember exactly what you’ve read, so you always come right back where you left off. you also get notifications" />
                        <DescriptionCard title="2 - Wireframe" color="#4e9aff" logo={logoWireframe} description="When you create an account, we remember exactly what you’ve read, so you always come right back where you left off. You also get notifications.  When you create an account, we remember exactly what you’ve read, so you always come right back where you left off. you also get notifications" />
                        <DescriptionCard title="3 - Design" color="#ff8b40" logo={logoDesign} description="When you create an account, we remember exactly what you’ve read, so you always come right back where you left off. You also get notifications. when you create an account, we remember exactly what you’ve read, so you always come right back where you left off. you also get notifications" />
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
                <section id="section4" className="areas-seu-projeto">
                    <h2 className="title m-b-xl">Agora chegou a hora de saber mais<br /> sobre seu projetos!</h2>
                    <div className="content-seu-projecto">
                        <div className="content-form">
                            <ContentFields className="m-b-lg">
                                <h2>1. Qual è o tipo de seu projecto?</h2>
                                <div className="content-inputs">
                                    <div className="input">
                                        <input type="checkbox" id="ios" name="ios" />
                                        <label for="ios">IOS</label>
                                    </div>
                                    <div className="input">
                                        <input type="checkbox" id="android" name="android" />
                                        <label for="android">Android</label>
                                    </div>
                                    <div className="input">
                                        <input type="checkbox" id="sweb" name="sweb" />
                                        <label for="sweb">Sistema Web</label>
                                    </div>
                                    <div className="input">
                                        <input type="checkbox" id="smartwatch" name="smartwatch" />
                                        <label for="smartwatch">Smartwatch</label>
                                    </div>
                                    <div className="input">
                                        <input type="checkbox" id="site" name="site" />
                                        <label for="site">Site</label>
                                    </div>
                                    <div className="input">
                                        <input type="checkbox" id="weapi" name="weapi" />
                                        <label for="weapi">Criacao/Integracao WEB API</label>
                                    </div>
                                </div>
                            </ContentFields>
                            <ContentFields className="m-b-lg">
                                <h2>2. Qual è o estagio do projecto</h2>
                                <div className="content-inputs">
                                    <div className="input">
                                        <input type="radio" id="ideia" name="estagio" />
                                        <label for="ideia">Ideia</label>
                                    </div>
                                    <div className="input">
                                        <input type="radio" id="execucao" name="estagio" />
                                        <label for="execucao">Execucao</label>
                                    </div>
                                    <div className="input">
                                        <input type="radio" id="manutencao" name="estagio" />
                                        <label for="manutencao">Manutencao</label>
                                    </div>
                                </div>
                            </ContentFields>
                            <ContentFields className="m-b-lg b-r-3em">
                                <h2 className="m-b-25">3. Informacoes Pessoais</h2>
                                <div className="content-input-text">
                                    <input type="text" id="name" name="name" placeholder="Nome" />
                                    <input type="text" id="email" name="email" placeholder="E-mail" />
                                    <input type="text" id="telefone" name="telefone" placeholder="Telefone" />
                                </div>
                                <div className="content-input-text">
                                    <input type="text" id="cidade" name="cidade" placeholder="Cidade" />
                                    <input type="text" id="empresa" name="empresa" placeholder="Empresa" />
                                    <input type="text" id="cargo" name="cargo" placeholder="Cargo" />
                                </div>
                                <div className="content-input-textarea" id="projeto">
                                    <textarea placeholder="Explique seu projeto..."></textarea>
                                </div>
                                <div className="content-input-select">
                                    <select>
                                        <option value="" disabled selected>Como Chougo ate nos?</option>
                                        <option>Facebook</option>
                                        <option>Linkendin</option>
                                        <option>Pessoa</option>
                                    </select>
                                </div>
                            </ContentFields>
                        </div>
                    </div>
                    <div>
                        <button className="enviar-button">ENVIAR</button>
                    </div>
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
