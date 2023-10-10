import './index.scss'
import Header from '../../../components/cabecalho'

export default function Cadastrar() {

    return (
        <div className='Carrinho-page'>
            <Header />
            <section>

                <div className='cima'>
                    <h1> Outros produtos</h1>
                    
                </div>


                <div>
                    <h1> Meu carrinho</h1>
                    
                    <div>
                        <p>calcular frete</p>
                         <div>
                            <input  type='text' />
                            <button> Calcular</button>
                        </div>   
                    </div>
                </div>

            </section>
        </div>
    )
}