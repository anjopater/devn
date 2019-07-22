import React, { Component } from 'react';
import ContentFields from '../ContentFields';
import './FormEnviar.scss';

export default class FormEnviar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ios: false,
            android: false,
            sweb: false,
            smartwatch: false,
            site: false,
            weapi: false,

            estagio: '',

            name: '',
            email: '',
            telefone: '',
            ciudade: '',
            cargo: '',
            empresa: '',

            explique: '',

            comoChegou: ''
        }

        this.onChangeCheckboxField = this.onChangeCheckboxField.bind(this);
        this.onChangeRadioField = this.onChangeRadioField.bind(this);
        this.onChangeTextField = this.onChangeTextField(this);
    }

    onChangeCheckboxField = (event) => {
        this.setState({ [event.currentTarget.name]: event.currentTarget.checked });
    }

    onChangeRadioField = (event) => {
        this.setState({ estagio: event.currentTarget.id });
    }

    onChangeTextField = (property) => (event) => {
        this.setState({ [event.target.id]: event.target.id.value });
    }

    onChangeSelect = (event) => {
        const { value } = event.target;
        this.setState({ comoChegou: value });
    }

    onSend = () => {
        alert(JSON.stringify(this.state));
    }

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
                                    <input type="checkbox" id="ios" name="ios" checked={this.state.ios} onChange={this.onChangeCheckboxField} />
                                    <label htmlFor="ios">IOS</label>
                                </div>
                                <div className="input">
                                    <input type="checkbox" id="android" name="android" checked={this.state.android} onChange={this.onChangeCheckboxField} />
                                    <label htmlFor="android">Android</label>
                                </div>
                                <div className="input">
                                    <input type="checkbox" id="sweb" name="sweb" checked={this.state.sweb} onChange={this.onChangeCheckboxField} />
                                    <label htmlFor="sweb">Sistema Web</label>
                                </div>
                                <div className="input">
                                    <input type="checkbox" id="smartwatch" name="smartwatch" checked={this.state.smartwatch} onChange={this.onChangeCheckboxField} />
                                    <label htmlFor="smartwatch">Smartwatch</label>
                                </div>
                                <div className="input">
                                    <input type="checkbox" id="site" name="site" checked={this.state.site} onChange={this.onChangeCheckboxField} />
                                    <label htmlFor="site">Site</label>
                                </div>
                                <div className="input">
                                    <input type="checkbox" id="weapi" name="weapi" checked={this.state.weapi} onChange={this.onChangeCheckboxField} />
                                    <label htmlFor="weapi">Criacao/Integracao WEB API</label>
                                </div>
                            </div>
                        </ContentFields>
                        <ContentFields className="m-b-lg">
                            <h2>2. Qual è o estagio do projecto</h2>
                            <div className="content-inputs">
                                <div className="input">
                                    <input type="radio" value="" id="ideia" name="estagio" onChange={this.onChangeRadioField} />
                                    <label htmlFor="ideia">Ideia</label>
                                </div>
                                <div className="input">
                                    <input type="radio" id="execucao" name="estagio" onChange={this.onChangeRadioField} />
                                    <label htmlFor="execucao">Execucao</label>
                                </div>
                                <div className="input">
                                    <input type="radio" id="manutencao" name="estagio" onChange={this.onChangeRadioField} />
                                    <label htmlFor="manutencao">Manutencao</label>
                                </div>
                            </div>
                        </ContentFields>
                        <ContentFields className="m-b-lg b-r-3em">
                            <h2 className="m-b-25">3. Informacoes Pessoais</h2>
                            <div className="content-input-text">
                                <input type="text" id="name" name="name" placeholder="Nome" onChange={this.onChangeTextField.bind('name')} />
                                <input type="email" id="email" name="email" placeholder="E-mail" onChange={this.onChangeTextField.bind('email')} />
                                <input type="number" id="telefone" name="telefone" placeholder="Telefone" onChange={this.onChangeTextField.bind('telefone')} />
                            </div>
                            <div className="content-input-text">
                                <input type="text" id="cidade" name="cidade" placeholder="Cidade" onChange={this.onChangeTextField.bind('cidade')} />
                                <input type="text" id="empresa" name="empresa" placeholder="Empresa" onChange={this.onChangeTextField.bind('empresa')} />
                                <input type="text" id="cargo" name="cargo" placeholder="Cargo" onChange={this.onChangeTextField.bind('cargo')} />
                            </div>
                            <div className="content-input-textarea" id="projeto">
                                <textarea placeholder="Explique seu projeto..." id="explique" onChange={this.onChangeTextField.bind('explique')}></textarea>
                            </div>
                            <div className="content-input-select">
                                <select onChange={this.onChangeSelect}>
                                    <option defaultValue="0" disabled >Como Chougo ate nos?</option>
                                    <option value="Facebook">Facebook</option>
                                    <option value="LInkendin">Linkendin</option>
                                    <option value="Pessoa">Pessoa</option>
                                </select>
                            </div>
                        </ContentFields>
                    </div>
                </div>
                <div>
                    <button className="enviar-button" onClick={this.onSend}>ENVIAR</button>
                </div>
            </div>
        )
    }
}
