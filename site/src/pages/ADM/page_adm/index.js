import './index.scss'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import storage from 'local-storage'

import axios from 'axios'
import { ListarImagemPorIDinstrumentos, ListarTodosProdutos, adicionarImagem, adicionarProduto } from '../../../api/produtoApi'
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom'
import { URL_API } from '../../../constant';






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
    const [preco, setPreco] = useState(0);
    const [precoPromo, setPrecoPromo] = useState(0);
    const [promo, setPromo] = useState(false);
    const [estoque, setEstoque] = useState(0);
    const [destaque, setDest] = useState(false);
    const [disponivel, setDisp] = useState(false);
    const [descricao, setDesc] = useState('');
    const [imagem, setImagem] = useState();


    const [produtos, setProdutos] = useState([]);
    const [produto, setProduto] = useState([])



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

            toast.error(err.response.data.erro)
            console.log(err.message.response);

        }
    }

    async function listarCategorias() {

        const r = await axios.get(URL_API + '/produto/categoria');
        setCategoriaTipo(r.data)
    }

    async function listarMarcas() {

        const r = await axios.get(URL_API + '/produto/marca');
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




    async function CarregarProduto() {
        try {
          const resp = await ListarTodosProdutos();
    
          let array = resp;
    
          for (let i = 0; i < array.length; i++) {
            let p = array[i];
            let img = await ListarImagemPorIDinstrumentos(p.ID);
    
            p.img = img[0].IMAGEM;
          }
    
          setProduto(array);
          console.log(array);
    
        } catch (err) {
          console.log(err.message);
        }
      }


    async function CarregarTodosProdutos() {
        const resp = await ListarTodosProdutos();
        console.log();
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
        CarregarProduto();
    }, [])


    useEffect(() => {
        //
        listarMarcas();
    }, []);



    useEffect(() => {
        //
        listarCategorias()
    }, [])




    function abrirAdd() {
        const add = document.getElementById('addProduto')
        add.classList.add('abrir')

        const consulta = document.getElementById('consultaProd')
        consulta.classList.remove('abrir')

    }

    function abrirCon() {
        const add = document.getElementById('addProduto')
        add.classList.remove('abrir')

        const consulta = document.getElementById('consultaProd')
        consulta.classList.add('abrir')

    }






    return (
        <div className='pageAdm'>
            <nav className='lateral-menu'>


                <div>
                    <h1> Bem Vindo</h1>
                    <h1> {usuario}</h1>
                </div>



                <ul className='baixo'>
                    <li className='item-menu ativo' >
                        <div onClick={abrirCon}>

                            <span className='link' >Consulta de dados</span>
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
                        <div onClick={abrirAdd}>

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

            <section className='Modais'>


                <section className='consultaProd abrir' id='consultaProd'>

                    <div className='cima'>
                        <h1>Consultar Produtos</h1>
                        <input type='text' placeholder='Pesquisa' />
                        <hr />
                    </div>


                    <div className='produtos'>
                        <div className='baixo'>
                            <div className='card'>

                                <div className='imgProd'>
                                    <img src='../../../assets/images/logo.svg' />
                                </div>

                                <div className='linecard' />



                                <div className='especificacao'>
                                    <h1> Nome do produto</h1>

                                    <div className='baixo'>

                                        <div className='esq'>
                                            <p> preço promocional caso tenha</p>
                                            <h1> preço atual</h1>
                                        </div>

                                        <div className='meio'>
                                            <p>marca</p>
                                            <p>340923(estoque)</p>
                                        </div>

                                        <div className='dir'>
                                            <h1>Editar</h1>
                                            <h1>Excluir</h1>
                                        </div>


                                    </div>

                                </div>
                            </div>

                        </div>


                    </div>



                </section>

                <section className='addProduto' id='addProduto'>
                    <ToastContainer />


                    <div className='Container'>



                        <div className='conteudo'>

                            <div className='apresentacao'>

                                <div className='azul'></div>
                                <h3>Cadastrar Novo Produto</h3>

                            </div>

                            <div className='inputsgeral'>

                                <div className='InputEsquerda'>

                                    <div className='inputs'>

                                        <div className='p'>
                                            <p>Nome:</p>
                                        </div>
                                        <div className='inp'>
                                            <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
                                        </div>

                                    </div>

                                    <div className='inputs'>

                                        <div className='p'>
                                            <p>Preço:</p>
                                        </div>
                                        <div className='inp'>
                                            <input type="text" value={preco} onChange={e => setPreco(e.target.value)} />
                                        </div>

                                    </div>

                                    <div className='inputs'>

                                        <div className='p'>
                                            <p>Preço Promoção:</p>
                                        </div>
                                        <div className='inp'>
                                            <input type='number' value={precoPromo} onChange={e => setPrecoPromo(e.target.value)} />
                                        </div>

                                    </div>


                                    <div className='inputs'>

                                        <div className='p'>
                                            <p>Estoque:</p>
                                        </div>
                                        <div className='inp'>
                                            <input type='Number' value={estoque} onChange={e => setEstoque(e.target.value)} />
                                        </div>

                                    </div>

                                    <div className='inputs'>

                                        <div className='p'>
                                            <p>Promoçao:</p>
                                        </div>
                                        <div className='inp-c'>
                                            <input type='checkbox' value={promo} onChange={e => setPromo(e.target.checked)} />
                                        </div>

                                    </div>



                                </div>

                                <div className='InputDireta'>

                                    <div className='inputs'>

                                        <div className='p'>
                                            <p>Descrição:</p>
                                        </div>
                                        <div className='inp-d'>
                                            <textarea value={descricao} onChange={e => setDesc(e.target.value)}></textarea>
                                        </div>

                                    </div>

                                    <div className='inputs'>

                                        <div className='p'>
                                            <p>Destaque:</p>
                                        </div>
                                        <div className='inp-c'>
                                            <input type='checkbox' value={destaque} onChange={e => setDest(e.target.checked)} />
                                        </div>

                                    </div>

                                    <div className='inputs'>

                                        <div className='p'>
                                            <p>Disponivel:</p>
                                        </div>
                                        <div className='inp-c'>
                                            <input type='checkbox' value={disponivel} onChange={e => setDisp(e.target.checked)} />
                                        </div>

                                    </div>



                                    <div className='inputs'>

                                        <p> Marcas: </p>
                                        <select value={marca} onChange={e => setMarca(e.target.value)}>

                                            <option id='options' value={0}> Marcas </option>
                                            {marcasTipo.map(item =>

                                                <option value={item.id}> {item.marca} </option>
                                            )}

                                        </select>

                                    </div>

                                    <div className='inputs'>

                                        <p> Categorias: </p>
                                        <select value={categoria} onChange={e => setCategoria(e.target.value)}>

                                            <option id='options' value={0}> Categorias </option>
                                            {categoriaTipo.map(item =>

                                                <option value={item.Id}> {item.Categoria} </option>
                                            )}

                                        </select>

                                    </div>

                                </div>

                                <div className='imageminput'>



                                    <label className='inputdeimagem'>

                                        {!imagem &&
                                            <img className='imagemUpload' src='../../../assets/images/upload-solid.svg' />
                                        }

                                        {imagem &&
                                            <img className='imgaem-Upload' src={MostrarImagem()} />
                                        }
                                        <input className='inputdeimagem' type='file' id='imagemProduto' onChange={e => setImagem(e.target.files[0])} />

                                    </label>

                                </div>

                            </div>

                            <div className='butt'>


                                <div className='Salvar' onClick={SalvarCLick}>

                                    <p> Salvar </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


            </section>




        </div>
    )
}