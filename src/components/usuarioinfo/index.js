import './index.scss'

export default function AbaUsuario() {

    return (

        <div className='aba-usuario'>

            <div className='superior'>

                <div className='options'>

                    <div className='cima'>
                        <img src='../../../assets/images/logo.svg' />
                        <div>
                            <h1>Nome</h1>
                            <div className='line' />
                            <p>Email</p>
                        </div>
                    </div>


                    <div className='baixo'>


                        <div className='buttons'>
                            <article className='botao-aba'>

                                <button>
                                    <p>HOME</p>
                                    <img src='../../assets/images/image142.svg'></img>
                                </button>


                            </article>

                            <article className='botao-aba'>

                                <button>
                                    <p>EDITAR PERFIL</p>
                                    <img src='../../assets/images/image138.svg'></img>
                                </button>

                            </article>

                            <article className='botao-aba'>

                                <button>
                                    <p>NOTIFICAÇÕES</p>
                                    <img src='../../assets/images/image137.svg'></img>
                                </button>

                            </article>

                            <article className='botao-aba'>

                                <button>
                                    <p>SENHAS/SEGURANÇA</p>
                                    <img src='../../assets/images/image139.svg'></img>
                                </button>

                            </article>


                            <nav className='deslog-aba'>

                                <button>Deslogar</button>

                            </nav>

                        </div>





                    </div>

                </div>
            </div>


        </div>

    )

}