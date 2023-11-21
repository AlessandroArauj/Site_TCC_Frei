import './index.scss'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import storage from 'local-storage'

import axios from 'axios'
import { BuscarImagem, DeletarProduto, ListarTodosProdutos, adicionarProduto, ListarProdutosPorID, EnviarImagem, editarProduto } from '../../../api/produtoApi'
import { Await, useNavigate, useParams } from 'react-router-dom';

import { Link } from 'react-router-dom'
import { URL_API } from '../../../constant';






export default function Page_adm() {


    const [marca, setMarca] = useState(0);
    const [marcasTipo, setTipoMarcas] = useState([]);


    const [categoria, setCategoria] = useState(0)
    const [categoriaTipo, setCategoriaTipo] = useState([]);


    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState(0);
    const [precoPromo, setPrecoPromo] = useState(0);
    const [promo, setPromo] = useState();
    const [estoque, setEstoque] = useState(0);
    const [destaque, setDest] = useState(false);
    const [disponivel, setDisp] = useState(false);
    const [descricao, setDesc] = useState('');
    const [imagem, setImagem] = useState('');
    const [id, setId] = useState(0);
    const [listarProduto, setListaProduto] = useState()


    const [produtos, setProdutos] = useState([]);
    const [produto, setProduto] = useState([])



    const [usuario, setUsuario] = useState('-');
    const navigate = useNavigate();
    const idParams = useParams().id;


    function sairClick() {

        storage.remove('admin-logado');
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







    async function CarregarTodosProdutos() {
        const resp = await ListarTodosProdutos();

        setProdutos(resp);
    }





    async function listarCategorias() {

        const r = await axios.get(URL_API + '/produto/categoria');
        setCategoriaTipo(r.data)
    }

    async function listarMarcas() {

        const r = await axios.get(URL_API + '/produto/marca');
        setTipoMarcas(r.data)
    }






    async function CarregarProdutoPorIDs() {
        const resp = await ListarProdutosPorID(idParams)

        setNome(resp.PRODUTO)
        setPreco(resp.PRECO)
        setPrecoPromo(resp.PRECOPROMO)
        setPromo(resp.PROMODISP)
        setEstoque(resp.ESTOQUE)
        setDest(resp.DESTAQUE)
        setDisp(resp.DISPONIVEL)
        setDesc(resp.DETALHE)
        setMarca(resp.MARCAS)
        setCategoria(resp.CATEGORIAS)
        setId(resp.ID)
        setImagem(resp.IMAGEM)


        console.log(resp.IMAGEM);
    }




    async function DeletarProdutos(id, nome) {

        try {
            const resp = await DeletarProduto(id)
            alert('Produto Removido' + nome)
            window.location.reload()
        } catch (err) {
            alert('não pode ser removido')
        }


    }





    async function CarregarTodosProdutos() {
        const resp = await ListarTodosProdutos();
        console.log();
        setProdutos(resp);
    }



    function AlterarProdutoClick(id) {
        navigate(`/pageAdm/alterar/${id}`)

    }



    async function SalvarCLick() {
        try {

            if (!imagem) {
                throw new Error('Imagem Obrigatória')
            }

            if (id === 0) {
                const novoProduto = await adicionarProduto(marca, categoria, nome, preco, precoPromo, destaque, promo, disponivel, estoque, descricao);
                const re = await EnviarImagem(novoProduto.id, imagem)

                toast.dark('Produto Cadastrado!')

            }

            else {

                await editarProduto(marca, categoria, nome, preco, precoPromo, destaque, promo, disponivel, estoque, descricao, id);
                await EnviarImagem(id, imagem)

                toast.dark('Produto Alterado!')

                navigate('/pageAdm')
                window.location.reload()

            }

        } catch (err) {
            if (err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.message)

        }
    }



    function MostrarImagem() {

        if (typeof (imagem) == 'object') {
            return URL.createObjectURL(imagem)
        }

        else {
            return BuscarImagem(imagem);
        }
    }






    useEffect(() => {
        if (idParams) {
            CarregarProdutoPorIDs();
        }
    }, [])


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

    useEffect(() => {
        //
        CarregarTodosProdutos();
    }, [])

    useEffect(() => {
        //

    }, [])


    useEffect(() => {
        //
        listarMarcas();
    }, []);



    useEffect(() => {
        //
        listarCategorias()
    }, [])

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




    function abrirAdd() {
        const add = document.getElementById('addProduto')
        add.classList.add('abrir')

        const consulta = document.getElementById('consultaProd')
        consulta.classList.remove('abrir')

        const status = document.getElementById('statusProd')
        status.classList.remove('abrir')

    }

    function abrirCon() {
        const add = document.getElementById('addProduto')
        add.classList.remove('abrir')

        const consulta = document.getElementById('consultaProd')
        consulta.classList.add('abrir')

        const status = document.getElementById('statusProd')
        status.classList.remove('abrir')
    }

    function abrirSta() {
        const status = document.getElementById('statusProd')
        status.classList.add('abrir')

        const add = document.getElementById('addProduto')
        add.classList.remove('abrir')

        const consulta = document.getElementById('consultaProd')
        consulta.classList.remove('abrir')

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
                        <div onClick={abrirSta}>

                            <span className='link'>Status de produtos</span>
                            <img src=''></img>
                        </div>


                    </li>

                    <li className='item-menu' >
                        <div onClick={abrirAdd}>

                            <span className='link'>{id === 0 ? 'Inserir Produto' : 'Alterar Produto'}</span>
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


                <section className='consultaProd' id='consultaProd'>

                    <div className='cima'>
                        <h1>Consultar Produtos</h1>
                        <input type='text' placeholder='Pesquisa' />
                        <hr />
                    </div>


                    <div className='produtos'>
                        <div className='baixo'>
                            {produtos.map(item =>
                                <div className='card'>

                                    <div className='imgProd'>
                                        <img src={BuscarImagem(item.IMAGEM)} />
                                    </div>

                                    <div className='linecard' />



                                    <div className='especificacao'>
                                        <h1> {item.PRODUTO} </h1>
                                        <p> Identificação: {item.ID} </p>

                                        <div className='baixo'>

                                            <div className='esq'>
                                                <p> Preço promoção  {item.PRECOPROMO}R$ </p>
                                                <h1>Preço {item.PRECO}R$ </h1>
                                            </div>

                                            <div className='meio'>
                                                <p>{item.MARCAS}</p>
                                                <p>{item.ESTOQUE}(estoque)</p>
                                            </div>

                                            <div className='dir'>
                                                <img alt='Editar' src='../../assets/images/editIcon.svg' onClick={() => [AlterarProdutoClick(item.ID), window.location.reload()]} />
                                                <img alt='Deletar' src='../../assets/images/DeleteIcon.svg' onClick={() => DeletarProdutos(item.ID, item.PRODUTO)} />

                                            </div>


                                        </div>

                                    </div>
                                </div>
                            )}


                        </div>


                    </div>



                </section>

                <section className='statusProd abrir' id='statusProd'>
                    
                    <div className='cardPedi'>
                        <div className=' cima'>
                            <div>
                                <p>N° do pedido:</p>
                                <h1></h1>
                            </div>

                            <div>
                                <p>Nome do usuario:</p>
                                <h1>sdfgsdfgsdgsd</h1>
                            </div>

                            <div>
                                <p>pedido feito em:</p>
                                <h1></h1>
                            </div>
                        </div>

                        <div className='subcard'>

                            <div>
                                <img src='' />
                            </div>

                            <div  className='dir'>

                                <div className='infoPedi'>

                                    <div>
                                        <h1>Nome Produto</h1>
                                    </div>

                                    <div>
                                        <h1>Andamento do Produto</h1>
                                        <p></p>
                                    </div>

                                </div>

                                <div className='buttons'>
                                    <select>
                                        <option>nsei</option>
                                        <option>nsei</option>
                                        <option>nsei</option>
                                    </select>

                                    <button>Confirmar slaoq</button>
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


                                <div className='Salvar' onClick={SalvarCLick} >

                                    <p> {id === 0 ? 'Salvar' : 'Alterar'} </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


            </section>




        </div>
    )
}