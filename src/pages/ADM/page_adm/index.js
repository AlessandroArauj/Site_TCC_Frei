import './index.scss'
import { Link } from 'react-router-dom'

export default function page_adm() {

    return (
        <div className='pagina_adm'>

            <header className='cabe'>
                <img src='../../../assets/images/logo.svg' />
                <h1> Seja bem vindo novamente</h1>
                <img />
            </header>


            <section className='conteudo'>

                <div className=' card'>
                    <input type='text' placeholder='Pesquise o produto' />

                    <Link to={''}>
                        <button> Adicionar produto</button>
                    </Link>

                </div>

                <div className='line' />

                <div className='card'>
                    <input type='text' placeholder='Pesquise por Denucias/Sugestões' />

                </div>

            </section>

            <nav>
                <Link>
                    <button> Consultar Produtos</button>
                </Link>

                <Link>
                    <button> Observar Gráficos</button>
                </Link>

            </nav>

        </div>
    )
}