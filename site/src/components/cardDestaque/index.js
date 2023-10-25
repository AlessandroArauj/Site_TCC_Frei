import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import { ListarTodosProdutos } from '../../api/produtoApi';


export default function CardProduto(props) {

    const carousel = props.addcarousel

    const [produto, setProduto] = useState([]);

    async function CarregarProduto(){
        const resp = await ListarTodosProdutos();
        setProduto(resp);
    }

    useEffect(() => {
        CarregarProduto();

    }, [])

    return (
        <div className='CardDestaques'>
    
        {produto.map(item =>
        
            <div className='cardProduto'>

            <div className='container'>
                <div className='carousel' ref={carousel}>

                    <div className='card'>

                        <div className='cima'>
                            <div> </div>
                            <div className='line-prod' />
                        </div>

                        <div className='baixo'>
                            <div className='baixo_cima'>
                                <p>{item.PRODUTO}</p>
                                <h1>{item.PRECO}</h1>
                                <h2>{item.PRECOPROMO}</h2>
                            </div>

                            <Link to={'/pageProduto'}>
                                <button className='Comp_button'> Ver produto</button>
                            </Link>
                        </div>


                    </div>

                    
                </div>
            </div>

        </div>
        )}

        </div>
        
    )
}
