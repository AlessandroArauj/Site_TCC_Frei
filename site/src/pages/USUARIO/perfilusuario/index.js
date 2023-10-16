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








    var aba = document.querySelectorAll('.botao-aba')

    function selectAba() {
        aba.forEach((item) =>
            item.classList.remove('ativo')
        );
        this.classList.add('ativo')
    }

    aba.forEach((item) =>
        item.addEventListener('click', selectAba)
    )







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


                    <div className='baixo'>


                        <div className='buttons'>
                            <article className='botao-aba '>

                                <button className='item-botao'>
                                    <p>HOME</p>
                                    <img src='../../assets/images/image142.svg'></img>
                                </button>


                            </article>

                            <article className='botao-aba'>

                                <button className='item-botao ativo'>
                                    <p>EDITAR PERFIL</p>
                                    <img src='../../assets/images/image138.svg'></img>
                                </button>

                            </article>

                            <article className='botao-aba'>

                                <button className='item-botao'>
                                    <p>NOTIFICAÇÕES</p>
                                    <img src='../../assets/images/image137.svg'></img>
                                </button>

                            </article>

                            <article className='botao-aba'>

                                <button className='item-botao'>
                                    <p>SENHAS/SEGURANÇA</p>
                                    <img src='../../assets/images/image139.svg'></img>
                                </button>

                            </article>


                            <article className='botao-aba' onClick={sairClick}>

                                <button className='item-botao'>
                                    <p>SAIR DA CONTA</p>
                                    <img src='../../assets/images/sair.png'></img>
                                </button>

                            </article>

                        </div>


                        <script src='lateral.js' />


                    </div>

                </div>

                <div className='conteudo-option'>

                    < Modais />

                </div>


            </section>

        </div>

    )

}