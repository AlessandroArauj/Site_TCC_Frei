import { useEffect, useState } from 'react'
import { AddComentario, ListarComentarios } from '../../api/loginUserApi'
import { BuscarImagem } from '../../api/produtoApi'
import CompCartao from '../compCartao'
import Header from '../cabecalho'
import Rodape from '../rodape'

import './index.scss'

import storage from 'local-storage'
import { ToastContainer, toast } from 'react-toastify'



export default function CompProduto(props) {

    const id = props.produtos.ID

    const [comentario, setComentario] = useState('')
    const [idUser, setIdUser] = useState(0);
    const [comentarios, setComentarios] = useState([]);

    async function listarComentarios() {
        try {
            const resposta = await ListarComentarios(id)

            setComentarios(resposta);
        } catch (err) {
            console.log(err.message);
        }
    }

    async function addComent() {
        try {
            const resposta = await AddComentario(idUser, id, comentario)

            toast.dark('Comentario Adicionado')
            window.location.reload()
        } catch (err) {
            toast.error('Ocorreu um erro')
        }
    }


    useEffect(() => {
        if (storage('usuario-logado')) {
            const usuariologado = storage('usuario-logado');
            setIdUser(usuariologado.id);
        }
    }, [id, listarComentarios()]);


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



    useEffect(() => {
        listarComentarios()
    }, [])

    return (
        <div className='CompProduto'>
            <Header />
            <ToastContainer />
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

                        {comentarios.map((item, index) => (
                            item.Comentario.trim() !== '' && (
                                <div key={index} className='comentarioCard'>
                                    <div className='coment'>
                                    <p>{item.Usuario} Comentou:</p>
                                    <h3>{item.Comentario}</h3>
                                    </div>
                                </div>
                            )
                        ))}



                    </div>

                    <label>
                        <input type='text' placeholder='Faça seu comentario' value={comentario} onChange={e => setComentario(e.target.value)} />
                        <img src='../../../assets/images/enviar.png' onClick={addComent} />
                    </label>
                </div>







            </section>




        <Rodape />
        </div>

    )
}