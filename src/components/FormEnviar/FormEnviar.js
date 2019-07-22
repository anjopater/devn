import React, { Component } from 'react';
import ContentFields from '../ContentFields';
import './FormEnviar.scss';

export default class FormEnviar extends Component {
    render() {
        return (
            <div className="form-enviar">
                <h2 className="title m-b-xl">Agora chegou a hora de saber mais<br /> sobre seu projetos!</h2>
                <div className="content-seu-projecto">
                    <div>
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
            </div>
        )
    }
}
