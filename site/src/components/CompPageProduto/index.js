import { BuscarImagem } from '../../api/produtoApi'
import CompCartao from '../compCartao'
import './index.scss'



export default function CompProduto(props) {


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
            <CompCartao />
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
                                <p> {props.produtos.PRODUTO} </p>
                                {props.produtos.PRECOPROMO ? (
                                    <h1>{props.produtos.PRECOPROMO}</h1>
                                ) : (
                                    <h1>{props.produtos.PRECO}</h1>
                                )}

                            </div>
                            

                            <div className='Cubo-dir'>
                                <p>Produto disponivel</p>

                                <p>Quantidade de estoque</p>

                            </div>

                        </div>

                        <div className='cad'>
                            <button className='button1' onClick={abrirModal1}> Forma de pagamento</button>
                            <button className='button2' > Adicionar ao carrinho</button>
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
                        <button  className='button11' onClick={AbrirDescricao}> Abrir </button>
                        <button  className='button22' onClick={FecharDescricao}>Fech</button>
                    </div>

                    <div className='baixo'>
                        <h1> 
                            {props.produtos.DETALHE}
                        </h1>
                    </div>

                </div>

                <div className='comen'>
                    <h1>AVALIAÇÕES DOS CLIENTES</h1>
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