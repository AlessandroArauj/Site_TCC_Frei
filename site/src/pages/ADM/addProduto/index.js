import { Link } from 'react-router-dom'
import './index.scss'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { URL_API } from '../../../constant';
import axios from 'axios'
import { ListarTodosProdutos, adicionarImagem, adicionarProduto } from '../../../api/produtoApi'






export default function AddProduto() {

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
    






    return (


        <div className="addProduto">
            <ToastContainer />

            <div className='Cabecalho'>

                <div className='BemvindoADM'>

                    <p>Seja bem vindo, </p>

                </div>
                <div className='FotoADM'>

                    <div className='Foto'> D </div>

                </div>

            </div>


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
                                    <input type='number' value={preco} onChange={e => setPreco(e.target.value)} />
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

                        <div className='Salvar'>

                            <Link className='Links' to={'/pageAdm'}> Voltar para Adm</Link>

                        </div>

                        <div className='Salvar' onClick={SalvarCLick}>

                            <p> Salvar </p>

                        </div>

                    </div>

                </div>

            </div>

            

        </div>
    )

}