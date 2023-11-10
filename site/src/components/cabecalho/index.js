import './index.scss'
import { Link, useNavigate } from 'react-router-dom'
import storage, { set } from 'local-storage'
import { useEffect, useState } from 'react'
import { BuscarImagem, ListarProdutosPorNome } from '../../api/produtoApi';


export default function Header() {
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState('-')
    const [busca, setBusca] = useState('')
    const [resultado, setResultado] = useState([]);
    const [erro, setErro] = useState('')


    async function Filtro() {
        try {
            const resp = await ListarProdutosPorNome(busca);

            console.log(resp);

            

            

            setResultado(resp);

        } catch (err) {


        }
    }

    function handleKeyUp(event) {
        if (event.key === 'Enter') {
            console.log('Enter key pressed');
            Filtro();
        }
    }




    useEffect(() => {
        if (storage('usuario-logado')) {
            const usuariologado = storage('usuario-logado');
            setUsuario(usuariologado.nome)
        }

    }, [])

    return (
        <div className='cabecalho'>

            <div className='cont-cabeca'>

                <div>

                <Link to={'/home'}><img src='../../../assets/images/logo.svg' className='logo'></img></Link>

                </div>

                


                <div className='Input'>

                <div className='input'>
                    <button onClick={Filtro} onKeyUp={handleKeyUp}>
                        <img src='../../../assets/images/lupa.png'></img>
                    </button>
                    <input type='text' value={busca} onChange={e => setBusca(e.target.value)} />
                </div>

                </div>

                <div className='dir'>
                    <div>
                        <Link className='butt-home' to={'/loginUser'}>
                            <div className={!storage('usuario-logado') ? 'minhaconta' : 'UserLetra'}> <h1> {storage('usuario-logado') ? usuario[0] : <img className='Perfilimg' src='../../../assets/images/perfil.png' />} </h1></div>

                        </Link>
                        <Link className='butt-home' to={storage('usuario-logado') ? '/LoginUser' : '/perfilusuario'}><p>{storage('usuario-logado') ? "Minha Conta" : 'Login'}</p></Link>
                    </div>

                    <div>
                        <Link to={'/Carrinho'}><img src='../../../assets/images/carrinho.png'></img></Link>
                        <Link className='butt-home' to={'/Carrinho'}><p>carrinho</p></Link>
                    </div>
                </div>

            </div>

            <div className='cont2' >
                <div className='resultados' >

                    {resultado.map(item => (

                        <div className='Resultados' onClick={() => navigate('/pageProduto/' + item.ID)}>

                            <div className='resultado-cont'>

                                <div className='foto-result'>

                                    <img src={BuscarImagem(item.IMAGEM)} />

                                </div>
                                <div className='nome-result'>

                                    <p> {item.PRODUTO}</p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>
            </div>




        </div>
    )
}