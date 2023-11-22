import './index.scss'
import { Link, useNavigate } from 'react-router-dom'
import storage, { set } from 'local-storage'
import { useEffect, useRef, useState } from 'react'
import { BuscarImagem, ListarProdutosPorNome } from '../../api/produtoApi';


export default function Header() {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState('-');
    const [busca, setBusca] = useState('');
    const [resultado, setResultado] = useState([]);
    const [mostrarResultados, setMostrarResultados] = useState(false);
    const [erro, setErro] = useState('');

    const cont2Ref = useRef(null);


    const handleClickOutside = (event) => {
        if (cont2Ref.current && !cont2Ref.current.contains(event.target)) {
            setMostrarResultados(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    async function Filtro() {
        try {
            const resp = await ListarProdutosPorNome(busca);
            setResultado(resp);

            if (resp.lenght == ' ') {
                setMostrarResultados(false);
            }

            else {
                setMostrarResultados(true);
            }

        } catch (err) {
            console.error(err);
        }
    }

    function teclaEnter(e) {
        if (e.key === 'Enter') {
            Filtro();
        }
    }

    useEffect(() => {
        if (storage('usuario-logado')) {
            const usuariologado = storage('usuario-logado');
            setUsuario(usuariologado.nome);
        }
    }, []);



    function toggleMenu() {
        const menuToggle = document.querySelector('.dirCel');
        menuToggle.classList.toggle('menu-active');
    }





    return (
        <div className='cabecalho'>

            <div className='cont-cabeca'>

                <div>

                    <Link to={'/home'}><img src='../../../assets/images/logo.svg' className='logo'></img></Link>

                </div>


                <div className='Input'>

                    <div className='input'>
                        <button onClick={Filtro}>
                            <img src='../../../assets/images/lupa.png'></img>
                        </button>
                        <input type='text' value={busca} onKeyUp={teclaEnter} onChange={e => setBusca(e.target.value)} />
                    </div>

                </div>

                <div className='dirCel'>

                    <div class="menu-toggle" onClick={toggleMenu}>
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>



                    <div class="side-menu">
                        <ul>

                            <li>
                                <Link className='butt-home' to={'/loginUser'}>
                                    <div className={!storage('usuario-logado') ? 'minhaconta' : 'UserLetra'}> <h1> {storage('usuario-logado') ? usuario[0] : <img className='Perfilimg' src='../../../assets/images/perfil.png' />} </h1></div>

                                </Link>
                                <Link className='butt-home' to={storage('usuario-logado') ? '/LoginUser' : '/perfilusuario'}><p>{storage('usuario-logado') ? "Minha Conta" : 'Login'}</p></Link>

                            </li>
                            <li>
                                <Link to={'/Carrinho'}><img src='../../../assets/images/carrinho.png'></img></Link>
                                <Link className='butt-home' to={'/Carrinho'}><p>Carrinho</p></Link>
                            </li>
                        </ul>
                    </div>


                </div>

                <div className='dir'>
                    <div>
                        <Link className='butt-home' to={'/loginUser'}>
                            <div className={!storage('usuario-logado') ? 'minhaconta' : 'UserLetra'}> <h1> {storage('usuario-logado') ? usuario[0].toUpperCase() : <img className='Perfilimg' src='../../../assets/images/perfil.png' />} </h1></div>

                        </Link>
                        <Link className='butt-home' to={storage('usuario-logado') ? '/LoginUser' : '/perfilusuario'}><p>{storage('usuario-logado') ? "Minha Conta" : 'Login'}</p></Link>
                    </div>

                    <div>
                        <Link to={'/Carrinho'}><img src='../../../assets/images/carrinho.png'></img></Link>
                        <Link className='butt-home' to={'/Carrinho'}><p>carrinho</p></Link>
                    </div>
                </div>

            </div>



            <div className='cont2' ref={cont2Ref}>
                <div className='resultados'>
                    {mostrarResultados && resultado.map(item => (
                        <div className='Resultados' onClick={() => navigate('/pageProduto/' + item.ID)}>
                            <div className='resultado-cont'>
                                <div className='foto-result'>
                                    <img src={BuscarImagem(item.IMAGEM)} alt={`Imagem ${item.PRODUTO}`} />
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

