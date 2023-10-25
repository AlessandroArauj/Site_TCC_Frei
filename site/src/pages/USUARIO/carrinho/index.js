import './index.scss'
import Header from '../../../components/cabecalho'
import Compcarrinho from '../../../components/compcarrinho'


export default function Carrinho() {

    return (
        <div className='Carrinho-page'>
            <Header />
            <section>
                <Compcarrinho />
           
            
              
            </section>
            
            <div className='baixo'>
                <div className='esquerda'>
            <div>
            <p>SELECIONAR TODOS OS PRODUTOS</p>
            <p></p>
            <input className='box' type='checkbox'></input>
            </div>

            <div>
            <p>TOTAL DE PRODUTOS</p>
            <p></p>
            <h1>20,00 RS</h1>
            </div>

           
            </div>
            <div className='direita'>
            <div>
            <button className='tirar'>Remover do carrinho</button>
            </div>
            </div>

            </div>
        </div>
    )
}