import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import { URL_API } from '../../constant';
import axios from 'axios';
import { ListarImagemPorIDinstrumentos, BuscarImagem } from '../../api/produtoApi';

export default function CardProduto(props) {

    const carousel = props.addcarousel;


    const [imagem, setImagem] = useState([]);



    async function buscarImagens() {
        const resposta = await ListarImagemPorIDinstrumentos(props.produto.ID)

        setImagem(resposta)

    }






    useEffect(() => {
        buscarImagens();
    }, []);

    return (








        // <div className='cardMenorPreco'>

        //     <div className='container'>
        //         <div className='carousel' ref={carousel2}>

        //             <div className='card'>

        //                 <div className='cima'>
        //                     <div> </div>
        //                     <div className='line-prod' />
        //                 </div>
        //                 <div className='superior'>

        //                     <div className='baixo'>
        //                         <div className='baixo_cima'>
        //                             <p>Violão Jumbo Yamaha Cpx sla oq, eletrico com cordas de aço</p>
        //                             <h1> R$ 2 real e um pão</h1>
        //                         </div>

        //                         <Link to={'/pageProduto'}>
        //                             <button className='Comp_button'> Ver produto</button>
        //                         </Link>
        //                     </div>


        //                 </div>


        //             </div>
        //         </div></div>






            <div className='cardProduto'>

                <div className='container'>

                    <div className='carousel' ref={carousel}>

                        <div className='card'>

                            <div className='superior'>

                                <img className='imagem-produto' src={BuscarImagem(imagem.map(item => item.IMAGEM))} />

                            </div>

                            <div className='linhareta' />

                            <div className='inferior'>

                                <div className='nomeProduto'>
                                    <p> {props.produto.PRODUTO} </p>
                                </div>

                                <div className='precos'>

                                    <h3 className='preco'>R${props.produto.PRECO}</h3>
                                    <h2 className='precopromo'> R${props.produto.PRECOPROMO} </h2>

                                </div>

                                <div className='freteVisual'>

                                    <p>Frete Grátis</p>

                                </div>

                            </div>

                        </div>


                    </div>
                </div>


            </div>
            )
    
}
