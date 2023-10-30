
import './index.scss';
import { useEffect, useState } from 'react';
import { ListarImagemPorIDinstrumentos, BuscarImagem } from '../../api/produtoApi';
import { Link } from 'react-router-dom';

export default function CardProduto(props) {

    const carousel = props.addcarousel

    return (
        <div className='cardProduto'>

            <div className='container'>
                <div className='carousel' ref={carousel}>

                    <div className='card'>

                        <div className='cima'>
                            <div> </div>
                            <div className='line-prod' />
                        </div>
                        <div className='superior'>

                            <div className='baixo'>
                                <div className='baixo_cima'>
                                    <p>Violão Jumbo Yamaha Cpx sla oq, eletrico com cordas de aço</p>
                                    <h1> R$ 2 real e um pão</h1>
                                </div>

                                <Link to={'/pageProduto'}>
                                    <button className='Comp_button'> Ver produto</button>
                                </Link>
                            </div>


                        </div>


                    </div>


                </div>
            </div>


        </div>
    )

}
