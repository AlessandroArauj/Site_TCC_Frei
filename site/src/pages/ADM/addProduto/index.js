import { Link } from 'react-router-dom'
import './index.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { adicionarProduto } from '../../../api/produtoApi'






export default function AddProduto() {

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
    const [id, setId] = useState(0);

    async function SalvarCLick(){
        try {
            const r = await adicionarProduto(marca, categoria, nome, preco, precoPromo, destaque, promo, disponivel, estoque, descricao)
            alert('Produto Cadastrado!')

        } catch (err) {
            
            alert(err.response.message)
        }
    }

    async function listarCategorias(){
        
        const r = await axios.get('http://localhost:5000/produto/categoria');
        setCategoriaTipo(r.data)
    }

    async function listarMarcas(){
        
        const r = await axios.get('http://localhost:5000/produto/marca');
        setTipoMarcas(r.data)
    }


    

    useEffect(() =>{
    //
    listarMarcas();
    }, []);



    useEffect(() => {
    //
    listarCategorias()
    }, [])







    return (


        <div className="addProduto">
            <h1>Cadastre ou  Edite as informações de seu produto  </h1>


            <div className='f1'>





                <div className='right'>

                    <div className='start-right'>
                        <input type='text' placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)} />
                        <input type='text' placeholder='Preço' value={preco} onChange={e => setPreco(e.target.value)} />
                    </div>

                    <div className='center-right'>
                        <label>
                            <input type='text' placeholder='Promoção' value={precoPromo} onChange={e => setPrecoPromo(e.target.value)}/>


                        </label>

                        <input type='text' placeholder=' estoque' value={estoque} onChange={e => setEstoque(e.target.value)}/>
                    </div>

                    <div className='end-right'>



                        <select value={marca} onChange={e => setMarca(e.target.value)}>
                            <option value={0}> Marca</option>
                            {marcasTipo.map(item =>
                                
                                <option value={item.id}> {item.marca} </option>
                            )}

                        </select>

                        <select value={categoria} onChange={e => setCategoria(e.target.value)}>
                            <option value={0}> Categoria</option>
                            {categoriaTipo.map(item =>
                                
                                <option value={item.Id}> {item.Categoria} </option>    
                            )}
                        </select>

                            <p>Promoção?</p>
                            <input type='checkbox' checked={promo} onChange={e => setPromo(e.target.checked)}></input>
                        


                            <p>Destaque</p>
                            <input type='checkbox' checked={destaque} onChange={e => setDest(e.target.checked)}/>

                            <p>Disponivel</p>
                            <input type='checkbox' checked={disponivel} onChange={e => setDisp(e.target.checked)}/>
                    </div>






                    <input type='text' value={descricao} onChange={e => setDesc(e.target.value)}/>








                </div>

                <button className='buttons' onClick={SalvarCLick}> Adicionar produto</button>
                <h1>Cadastrar ou  Editar as Imagens do seu Produto</h1>


                <div className='left'>
                    <div className='start-left'>
                        <div className='lado'></div>
                        <input className='ladoo' type='image'></input>


                    </div>

                    <div className='end-left'>

                        <div />
                    </div>

                </div>

                <button className='buttons'> Adicionar Imagem   </button>
                <Link className='voltar' to={'/'}> Voltar p/ Home</Link>

            </div>





        </div>
    )

}