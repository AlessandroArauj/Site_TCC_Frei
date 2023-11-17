import { BuscarImagem } from '../../api/produtoApi'
import Header from '../cabecalho'
import CompCartao from '../compCartao'
import './index.scss'

import storage from 'local-storage'
import { ToastContainer, toast } from 'react-toastify'



export default function CompProduto(props) {

    const id = props.produtos.ID


    function addCarrinho() {
        let carrinho = [];
        if (storage('carrinho')) {
            carrinho = storage('carrinho')
        }

        if (!carrinho.find(item => item.id === id)) {
            carrinho.push({
                id: id,
                qtd: 1
            })
            storage('carrinho', carrinho)
        }

        toast.dark('Produto no carrinho')
    }

    function abrirModal1() {
        const editar = document.getElementById('Modal1')
        editar.classList.add('abrir')

    }



    function AbrirDescricao() {
        const Modal1 = document.getElementById('desc')
        Modal1.classList.add('maior')

    }

    function FecharDescricao() {
        const Modal1 = document.getElementById('desc')
        Modal1.classList.remove('maior')
    }





    return (
        <div className='CompProduto'>
            <ToastContainer />
            <CompCartao />
            <Header />
            <section className='CompProd-f1'>


                <div className='Card'>
                    <div className='Esq'>



                        <div className='ImgPrincipal'>
                            <img src={BuscarImagem(props.produtos.IMAGEM)} />

                        </div>






                    </div>

                    <div className='Dir'>
                        <div className='cubos'>
                            <div className='Cubo-dir'>
                                <h2> {props.produtos.PRODUTO} </h2>
                                <h3 className='fretes'>  Frete Gratís para todo País!  </h3>
                                {props.produtos.PRECOPROMO ? (
                                    <h3>R${props.produtos.PRECOPROMO}</h3>
                                ) : (
                                    <h3>R${props.produtos.PRECO}</h3>
                                )}

                            </div>


                            <div className='Cubo-dir'>
                                <p> Marca Do produto: {props.produtos.MARCAS} </p>

                                <p>Quantidade de estoque: {props.produtos.ESTOQUE}</p>

                            </div>

                        </div>

                        <div className='cad'>
                            <button className='button1' onClick={abrirModal1}> Forma de pagamento</button>
                            <button className='button2' onClick={addCarrinho}> Adicionar ao carrinho</button>
                        </div>


                        <div className='Desq-Prod'>
                            <div className='bancos'>
                                <p>Tipos de pagamentos aceitos</p>
                                <img src='../../../assets/images/Pix.svg' />
                                <img src='../../../assets/images/Visa.svg' />
                                <img src='../../../assets/images/Santa.png' />
                                <img src='../../../assets/images/HipercCard.svg' />
                                <img src='../../../assets/images/MasterCard.svg' />
                                <img src='../../../assets/images/Elo.svg' />
                                <img src='../../../assets/images/itau.png' />
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            <section className='CompProd-f2'>

                <div className='infoPro' id='desc'>

                    <div className='cima'>
                        <h1>INFORMAÇÕES DO PRODUTO</h1>

                        <img className='button11' onClick={AbrirDescricao} src='../../../assets/images/menor.png' />
                        <img className='button22' onClick={FecharDescricao} src='../../../assets/images/menor.png' />

                    </div>

                    <div className='baixo'>
                        <h1>
                            {props.produtos.DETALHE}
                        </h1>


                    </div>

                </div>

                <div className='comen'>
                    <h1>COMENTARIOS</h1>

                    <div className='comentarios'>

                    </div>

                    <label>
                        <input type='text' placeholder='Faça seu comentario' />
                        <img src='../../../assets/images/enviar.png' />
                    </label>
                </div>


                <div className='faixa-5'>
                    <div className='cima-f5'>
                        <div className='line' />
                        <h1> Com os menores preços</h1>
                        <div className='line2' />
                    </div>


                    <div>

                    </div>
                </div>




            </section>





        </div>
    )
}