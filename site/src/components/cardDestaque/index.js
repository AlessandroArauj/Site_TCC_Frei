
import './index.scss';
import { useEffect, useState } from 'react';
import { ListarImagemPorIDinstrumentos, BuscarImagem } from '../../api/produtoApi';

export default function CardProduto(props) {

   
    
    return (
        <div className='cardProduto'>

            <div className='container'>
                <div className='carousel'>

                    <div className='card'>

                            <div className='superior'>

                                <img className='imagem-produto'  />

                            </div>

                            <div className='linhareta' />

                            <div className='inferior'>

                                <div className='nomeProduto'>
                                    <p>  </p>
                                </div>

                                <div className='precos'>

                                    <h3 className='preco'>R$</h3>
                                    <h2 className='precopromo'> R$</h2>

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
