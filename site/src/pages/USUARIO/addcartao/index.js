import Cabdois from '../../../components/cabdois'
import './index.scss'

export default function AddCartao(){

    return(
        <div className='page-add-cartao'>


                <div className='card'>

                   <div className='titulo'>
                    <h1 className='sair'>X</h1>
                    <h1 className='forma'>ESCOLHER FORMA DE PAGAMENTO</h1>
                    <div className='linha'></div>
                    </div>

                <div className='subcard'>

                    <p className='subtitulo'>CARTOES CADASTRADOS</p>
                    <div className='parcela'>
                    <input className='cartao' type='text' ></input>

                        <label className='labelzim'>
                            <p className='testinho'>PARCELAR EM:</p>
                            <input className='numero_parcela' type='number'></input>
                        </label>
                        <button className='cadastrar'>Cadastrar Novo Cartão</button>





                    </div>
                <div className='dd'>
                <div className='divisinha'></div>
                <p className='outras'>outras formas</p>
                <div className='divisinha'></div>
                </div>

                <div className='baixo'>
                   
                <div>   <button className='pix'>pix</button>
                        <img src='/assets/images/pix.svg'></img>
                </div>
                        <p>OU</p>
                <div>
                        <button className='boleto'>boleto</button>
                        <img src='/assets/images/image_125.png'></img>
                </div>
                </div>

                <div className='ultima'>
                    <p className='total'>Total:</p>
                    <p className='valor'></p>
                    <button className='cadastrar'>Efetuar Compra</button>

                </div>





                </div>

                </div>



        </div>


    )


}