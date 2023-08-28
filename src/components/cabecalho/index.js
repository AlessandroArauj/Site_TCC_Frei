import './index.scss'
import { Link } from 'react-router-dom'

export default function Cabecalho() {

    return (
        <div className='cabecalho'>

            <Link><img src='../../../assets/images/logo.png' className='logo'></img></Link>


            <div className='input'>

                <button>
                    <img src='../../../assets/images/lupa.png'></img>
                </button>
                <input type='text' />
            </div>

            <div className='dir'>
                <div>
                    <Link><img src='../../../assets/images/perfil.png'></img></Link>
                    <Link><p>minha conta</p></Link>
                </div>

                <div>
                    <Link><img src='../../../assets/images/carrinho.png'></img></Link>
                    <Link><p>carrinho</p></Link>
                </div>
            </div>
        </div>
    )
}