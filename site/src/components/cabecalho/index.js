import './index.scss'
import { Link, useNavigate } from 'react-router-dom'
import storage from 'local-storage'
import { useEffect, useState } from 'react'

export default function Header() {
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState('Denis')



    useEffect(() => {
        if (!storage('usuario-logado')){
            navigate('/loginUser')
        }
    }, [])

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
                    <Link className='butt-home' to={'/loginUser'}>
                        <div className='UserLetra'> {usuario[0]} </div>

                    </Link>
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