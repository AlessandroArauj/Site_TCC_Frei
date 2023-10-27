import './index.scss'
import { ToastContainer, toast } from 'react-toastify';


export default function cadastroAdm() {
    return (
        <div className="prin">


            <div className="esq">
                <h1> Logar</h1>
                <div className="line" />

                <div className="insercao">

                    <div>
                    
                        <input type="text" placeholder='Email' className='inputs' />

                        
                        <input type="password" placeholder='Senha' className='inputs' />
                    </div>
                    
                    <h1>
                        Solicitar nova senha
                    </h1>

                    <button className='Botao'>
                        Entrar
                    </button>
                </div>

            </div>



            <div className='dir'>
                <img src='../../../assets/images/logo.svg' />
            </div>

        </div>
    )
}