import './index.scss'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom'
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



    function abrirAlt(){

        const modal = document.getElementById('editarPerfil')
        
        modal.classList.remove('abrir')
        modal.classList.add('abrir')
        
        
    }
    
    function abrirSeguranca(){

        const modal = document.getElementById('senhaSeguranca')
        modal.classList.remove('abrir')
        modal.classList.add('abrir')
    }

   







    return (

        <div className='aba-usuario'>

            <div className='superior' />
            <section className='f1-usuario'>


                <div className='options'>

                    <div className='cima'>
                        <img src='../../../assets/images/logo.svg' />
                        <div>
                            <h1> {usuario}</h1>
                            <div className='line' />
                            <p>{email}</p>
                        </div>
                    </div>


                    <ul className='baixo'>
                        <li className='item-menu'>
                            <a href='#'>
                               
                                <span className='link'>Home</span>
                                <img src='../../assets/images/image142.svg'></img>
                            </a>

                        </li>

                        <li className='item-menu ativo' onClick={abrirAlt}>
                            <a href='#'>
                              
                                <span className='link'>Editar Perfil</span>
                                <img src='../../assets/images/image138.svg'></img>
                            </a>

                        </li>

                        <li className='item-menu'>
                            <a href='#'>
                                
                                <span className='link'>Notificação</span>
                                <img src='../../assets/images/image137.svg'></img>
                                
                            </a>

                        </li>

                        <li className='item-menu' onClick={abrirSeguranca}>
                            <a href='#'>
                                
                                <span className='link'>Senha/Segurança</span>
                                <img src='../../assets/images/image139.svg'></img>
                            </a>

                        </li>

                        <li className='item-menu'>
                            <a href='#'>
                                
                                <span className='link'>Sair da conta</span>
                                <img src='../../assets/images/sair.png'></img>

                            </a>

                        </li>

                    </ul>

                </div>

                <div className='conteudo-option'>

                        <Modais />
                </div>


            </section>

        </div>

    )

}