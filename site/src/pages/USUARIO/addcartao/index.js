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
                            <p className='testinho'>PARCELAR EM</p>
                            <input className='numero_parcela' type='number'></input>
                        </label>
                        <button className='cadastrar'>CADASTRAR NOVO CARTAO</button>
                    
                    
                    
                    
                    
                    </div>
                <div className='dd'>
                <div className='divisinha'></div>
                <p className='outras'>outras formas</p>
                <div className='divisinha'></div>
                </div>





                </div>

                </div>



        </div>


    )


}