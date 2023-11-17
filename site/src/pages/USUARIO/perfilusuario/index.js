import './index.scss'
import storage from 'local-storage'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Modais from '../../../components/usuarioinfo/index.js'

export default function AbaUsuario() {
    const navigate = useNavigate()

    const [usuario, setUsuario] = useState('-');
    const [email, setEmail] = useState('-');



    useEffect(() => {
        if (!storage('usuario-logado')) {
            navigate('/loginUser')
        }
        else {
            const usuariologado = storage('usuario-logado');
            setUsuario(usuariologado.nome)
            setEmail(usuariologado.email)


        }
    }, [])

    function sairClick() {

        storage.remove('usuario-logado');
        navigate('/')
    }








    var aba = document.querySelectorAll('.item-menu')

    function selectAba() {
        aba.forEach((item) =>
            item.classList.remove('ativo')
        );
        this.classList.add('ativo')
    }

    aba.forEach((item) =>
        item.addEventListener('click', selectAba)
    )











    function abrirAlt() {
        const editar = document.getElementById('editarPerfil')
        editar.classList.add('abrir')

        const senha = document.getElementById('senhaSeguranca')
        senha.classList.remove('abrir')

        const notificacao = document.getElementById('notificacao')
        notificacao.classList.remove('abrir')

    }

    function abrirNoti() {
        const notificacao = document.getElementById('notificacao')
        notificacao.classList.add('abrir')

        const editar = document.getElementById('editarPerfil')
        editar.classList.remove('abrir')

        const senha = document.getElementById('senhaSeguranca')
        senha.classList.remove('abrir')

    }



    function abrirSeg() {
        const senha = document.getElementById('senhaSeguranca')
        senha.classList.add('abrir')

        const editar = document.getElementById('editarPerfil')
        editar.classList.remove('abrir')

        const notificacao = document.getElementById('notificacao')
        notificacao.classList.remove('abrir')


    }

    return (
        <div className='perfil'>
            <nav className='lateral-menu'>

                <div>
                    <h1>{usuario}</h1>
                    <p>{email}</p>
                </div>

                <ul className='down'>

                    <Link to={'/home'} className='Link'>
                        <li className='item-menu' id='home'>
                            <span className='link'>HOME</span>
                            <img src='../../assets/images/image142.svg' />
                        </li>
                    </Link>

                    <li className='item-menu ativo' onClick={abrirAlt}>
                        <div>
                            <span className='link'>Editar Perfil</span>
                            <img src='../../assets/images/image138.svg' />
                        </div>
                    </li>

                    <li className='item-menu' onClick={abrirNoti}>
                        <div>

                            <span className='link'>Notificação</span>
                            <img src='../../assets/images/image137.svg'></img>
                        </div>


                    </li>

                    <li className='item-menu' onClick={abrirSeg}>
                        <div>

                            <span className='link'>Senha/Segurança</span>
                            <img src='../../assets/images/image139.svg'></img>
                        </div>

                    </li>

                    <li className='item-menu' onClick={sairClick}>
                        <div>

                            <span className='link' >Sair da conta</span>
                            <img src='../../assets/images/sair.png'></img>
                        </div>


                    </li>

                </ul>
            </nav>
            <div className='conteudo-option'>

                <Modais />
            </div>

        </div>


    )



}


