import React from 'react';
import ProdutoService from '../../app/produtoService';

const estadoIncial = {
    nome: '',
    sku: '',
    descricao: '',
    preco: 0,
    fornecedor: '',
    sucesso: false,
    errors: []
}



// import { Container } from './styles';
export default class CadastroProduto extends React.Component {

    state = estadoIncial;

    constructor() {
        super();
        this.service = new ProdutoService();
    }


    onChange = (event) => {
        const valor = event.target.value
        const nomeDoCampo = event.target.name
        this.setState({ [nomeDoCampo]: valor })
    }

    onSubmit = () => {
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            descricao: this.state.descricao,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor
        }


        try {


            this.service.salvar(produto);
            this.limparCampos();
            this.setState({ sucesso: true });


        } catch (erro) {
            console.log(erro);
            const errors = erro.errors;
            this.setState({ errors: errors });

        }


    }

    limparCampos = () => {
        this.setState(estadoIncial);
    }




    render() {
        return (
            <div className="card" >

                <div className="card-header">
                    Casdastro de Produto
                </div>
                <div className="card-body">


                    {this.state.sucesso &&

                        <div className="alert alert-dismissible alert-success">
                            <button type="button" className="close" data-dismiss="alert">&times;</button>
                            <strong>Bem feito</strong> Cadastro realizado com sucesso!
                        </div>

                    }


                    {this.state.errors.length > 0 &&

                        this.state.errors.map(msg => {
                            return (
                                <div className="alert alert-dismissible alert-danger">
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    <strong>Erro!</strong> 

                                    <a href="!#" className="alert-link"> {msg}</a> 
                                </div>
                            )

                        })




                    }







                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome: *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.nome}
                                    name="nome"
                                    onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>SKU: *</label>
                                <input type="text" className="form-control"
                                    value={this.state.sku} name="sku" onChange={this.onChange} />
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Descrição: *</label>
                                <textarea type="text" className="form-control"
                                    onChange={this.onChange}
                                    value={this.state.descricao} name="descricao"></textarea>
                            </div>
                        </div>

                    </div>


                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Preço: *</label>
                                <input type="text" className="form-control"
                                    onChange={this.onChange}
                                    value={this.state.preco} name="preco" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Fornecedor: *</label>
                                <input type="text" className="form-control"
                                    onChange={this.onChange}
                                    value={this.state.fornecedor} name="fornecedor" />
                            </div>
                        </div>



                    </div>


                    <div className="row">
                        <div className="col-md-1">
                            <button className="btn btn-success" onClick={this.onSubmit}>Salvar</button>
                        </div>
                        <div className="col-md-1">
                            <button className="btn btn-primary" onClick={this.limparCampos}>Limpar</button>
                        </div>




                    </div>



                </div>
            </div>
        )
    }

}