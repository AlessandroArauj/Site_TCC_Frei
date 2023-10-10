import './index.scss'
import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <div className='cabecalho'>

            <Link to={'/home'}><img src='../../../assets/images/logo.svg' className='logo'></img></Link>


            <div className='input'>
                <button>
                    <img src='../../../assets/images/lupa.png'></img>
                </button>
                <input type='text' />
            </div>

            <div className='dir'>
                <div>
                    <Link to={'/loginUser'}><img src='../../../assets/images/perfil.png'></img></Link>
                    <Link className='butt-home' to={'/loginUser'}><p>minha conta</p></Link>
                </div>

                <div>
                    <Link to={'/Carrinho'}><img src='../../../assets/images/carrinho.png'></img></Link>
                    <Link className='butt-home' to={'/Carrinho'}><p>carrinho</p></Link>
                </div>
            </div>
        </div>
    )
}