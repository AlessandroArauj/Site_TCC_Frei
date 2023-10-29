import './index.scss'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import storage from 'local-storage'

import axios from 'axios'
import { ListarTodosProdutos, adicionarImagem, adicionarProduto } from '../../../api/produtoApi'
import { useNavigate } from 'react-router-dom';

export default function Page_adm() {

    
    const [usuario, setUsuario] = useState('-');
    const navigate = useNavigate();


    function sairClick() {

        storage.remove('admin-logado');
        navigate('/')
    }

    useEffect(() => {
        if (storage('usuario-logado')) {
          navigate('/perfilusuario')
        }
      }, [])

      useEffect(() => {
        if (!storage('admin-logado')) {
          navigate('/')

        }

        else {
            const adminlogado = storage('admin-logado')
            setUsuario(adminlogado.nome)
        
        }
      }, [])

    const [listarProduto, setListaProduto] = useState()


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





    const [marca, setMarca] = useState(0);
    const [marcasTipo, setTipoMarcas] = useState([]);


    const [categoria, setCategoria] = useState(0)
    const [categoriaTipo, setCategoriaTipo] = useState([]);


    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [precoPromo, setPrecoPromo] = useState('');
    const [promo, setPromo] = useState(false);
    const [estoque, setEstoque] = useState(0);
    const [destaque, setDest] = useState(false);
    const [disponivel, setDisp] = useState(false);
    const [descricao, setDesc] = useState('');
    const [imagem, setImagem] = useState();
   

    const [produtos, setProdutos] = useState([]);

    

    async function CarregarTodosProdutos() {
        const resp = await ListarTodosProdutos();
        
        setProdutos(resp);
    }

    function MostrarImagem() {
        return URL.createObjectURL(imagem)
    }

    
    async function SalvarCLick() {
        try {
            const ProdutoCadastrado = await adicionarProduto(marca, categoria, nome, preco, precoPromo, destaque, promo, disponivel, estoque, descricao)
            const r = await adicionarImagem(imagem, ProdutoCadastrado.id)
            toast.dark('Produto Cadastrado!')

        } catch (err) {

            toast.error(err.message)
            console.log(err.response.message);
            
        }
    }

    async function listarCategorias() {

        const r = await axios.get('http://localhost:5000/produto/categoria');
        setCategoriaTipo(r.data)
    }

    async function listarMarcas() {

        const r = await axios.get('http://localhost:5000/produto/marca');
        setTipoMarcas(r.data)
    }

    useEffect(() => {
        //
        CarregarTodosProdutos();
    }, [])


    useEffect(() => {
        //
        listarMarcas();
    }, []);



    useEffect(() => {
        //
        listarCategorias()
    }, [])
    








    return (
        <div className='pageAdm'>
            <nav className='lateral-menu'>
                <div>
                    <h1> Bem Vindo , {usuario}</h1>
                </div>



                <ul className='baixo'>
                    <li className='item-menu ativo' >
                        <div>

                            <span className='link'>Consulta de dados</span>
                            <img src=''></img>
                        </div>

                    </li>

                    <li className='item-menu' >
                        <div>

                            <span className='link'>Reclamações</span>
                            <img src=''></img>
                        </div>


                    </li>

                    <li className='item-menu' >
                        <div>

                            <span className='link'>inserir produto</span>
                            <img src=''></img>
                        </div>

                    </li>

                    <li className='item-menu' >
                        <div>

                            <span className='link' onClick={sairClick}>Sair da conta</span>
                            <img src='../../assets/images/sair.png'></img>
                        </div>
                    </li>

                </ul>
            </nav>

            <section className='conteudo'>
                <div>

                </div>
                <div>

                </div>

                <div>

                </div>

                <div>

                </div>


            </section>




        </div>
    )
}