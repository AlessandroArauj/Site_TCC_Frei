import { Link } from 'react-router-dom'
import './index.scss'


export default function cardProdutoMenor(props) {

    const carousel2 = props.addcarousel2

    return (
        <div className='cardMenorPreco'>

            <div className='container'>
                <div className='carousel' ref={carousel2}>

                    <div className='card'>

                            <div className='superior'>

                                <img className='imagem-produto' />

                            </div>
                            <div className='inferior'>

                                <div className='nomeProduto'>
                                    <p>--------</p>
                                </div>

                                <div className='precos'>

                                    <h3 className='preco'>----</h3>
                                    <h2 className='precopromo'>-------</h2>

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
