import './index.scss'
import { Link, useNavigate } from 'react-router-dom'
import storage from 'local-storage'
import { useEffect } from 'react'
import Rodape from '../../../components/rodape/index.js'




export default function LandingPage() {

    const navigate = useNavigate()

    useEffect(() => {
        if (storage('admin-logado')) {
            navigate('/pageAdm')
        }
    }, [])


    return (
        <div className='landingPage'>
            <header>
                <img src=' ../../../assets/images/logo.svg' />
                <nav>
                    <Link className='link-head' to={'/home'}>
                        <h1 className='button-text-head'> Home</h1>
                    </Link>
                    <Link className='link-head'>
                        <h1 className='button-text-head'> Serviços</h1>
                    </Link>
                    <Link className='link-head'>
                        <h1 className='button-text-head'> Contatos</h1>
                    </Link>
                    <Link className='link-head' to={!storage('usuario-logado') ? '/LoginUser' : '/perfilusuario'}>
                        <h1 className='button-text-head'>{storage('usuario-logado') ? "Minha Conta" : 'Login'}</h1>
                    </Link>
                </nav>
            </header>

            <div className='conteudo'>
                <section className='f1' St>
                    <div>
                        <h1> É aqui na TOTH MUSIC que voce encontra o que mais deseja
                        </h1>
                        <p> Não deixe seu sonho de lado, então aproveite esse oportunidade e realize-o</p>
                        <Link className='butt-landin-page' to={'/home'}>
                            <button>
                                Realize-se
                            </button>
                        </Link>
                    </div>

                </section>

                <section className='f2'>
                    <h1> A TOTH MUSIC oferece diversos produtos dentro da área instrumental</h1>
                    <p> Vai ser aqui que você irá encontrar seus instrumento do sonho </p>

                    <div className=' baixo-f2'>

                        <Link className='butt-landin-page'>
                            <div>
                                <img src='../../../../assets/images/fone.svg' />
                                <h1> Audios</h1>
                                <p> Vendemos qualquer tipo de equipamentos ligado a Audios.</p>
                            </div>
                        </Link>

                        <Link className='butt-landin-page'>
                            <div>
                                <img src='../../../../assets/images/gaita.svg' />
                                <h1> Sopro</h1>
                                <p>  Ofercemos A grande maioria dos instrumentos relacionados a Sopro.</p>
                            </div>
                        </Link>

                        <Link className='butt-landin-page'>
                            <div>
                                <img src='../../../../assets/images/violao.svg' />
                                <h1> Cordas</h1>
                                <p> Aqui disponibilizamos uma alta diversificação de instrumentos relacionados a Cordas.</p>
                            </div>
                        </Link>
                    </div>
                </section>

                <section className='f3'>
                    <img src='../../../../assets/images/Rockin.svg' />
                    <div>
                        <h1> Parcerias com Shows</h1>
                        <p>Você sabia que aqui no site da TOTH Music, fazemos parcerias com shows bastante renomeado ?  E que uma deles que esta
                            rolando agora é parceria que a gente está tendo com o Rock in Rio. Caso queira saber mais click no botão abaixo</p>
                        <Link className='butt-landin-page'>
                            <button className='button'> Saiba mais</button>
                        </Link>
                    </div>
                </section>

                <section className='f4'>
                    <div>
                        <h1> Dicas de como tocar</h1>
                        <p> Algo muito legal que oferecemos é dicas de como tocar algum instrumento q vc desejou ter escolhido, para receber essas dicas, basta vc fazer o cadastro no site para receber notificações</p>

                        <Link className='butt-landin-page'>
                            <button className='button'> Saiba mais</button>
                        </Link>
                    </div>

                    <img src='../../../../assets/images/Dicas.svg' />

                </section>

                <section className='f5'>
                    <h1> Galeria / Exposição de fotos</h1>
                    <p> Aqui na TOTH MUSIC também temos uma galeria/exposição de fotos de voces usuários do nosso site, nela voces iram enviar suas fotos favoritas dos seus instrumentos para que todos os outros usuários possam ver também </p>

                    <img src='../../../../assets/images/laptop.svg' />

                    <Link className='butt-landin-page'>
                        <button className='button'> Saiba mais</button>
                    </Link>

                </section>

                <Rodape />

            </div>
        </div>
    )
}