import './index.scss'

export default function AbaUsuario() {

    return (

        <div className='aba-usuario'>

            <header className='mini-head'>

                <img className='img-usu-aba' src='../../../assets/images/logo.svg'></img>

                <div className='infos'>
                    <h2>Name</h2>
                    <div className='linhafina'></div>
                    <p>email</p>
                </div>
            </header>
            <div className='conteudo-aba'>

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

                </div>


                <nav className='deslog-aba'>

                    <button>Deslogar</button>

                </nav>

            </div>


        </div>

    )

}