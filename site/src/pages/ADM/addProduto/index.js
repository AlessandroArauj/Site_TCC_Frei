import { Link } from 'react-router-dom'
import './index.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'





export default function AddProduto() {

    const [marcasTipo, setTipoMarcas] = useState([])

    const [Nome, setNome] = useState('');
    const [Preco, setPreco] = useState('');
    const [PrecoPromo, setPrecoPromo] = useState('');
    const [Categoria, setCategoria] = useState(0)
    const [Promo, setPromo] = useState(false);
    const [Estoque, setEstoque] = useState('');
    const [Marca, setMarca] = useState(0);
    const [Destaque, setDest] = useState(false);
    const [Disponivel, setDisp] = useState(false);
    const [Descricao, setDesc] = useState('');
    const [id, setId] = useState(0);



    







    return (


        <div className="addProduto">
            <h1>Cadastre ou  Edite as informações de seu produto  </h1>


            <div className='f1'>





                <div className='right'>

                    <div className='start-right'>
                        <input type='text' placeholder='Nome' value={Nome} onChange={e => setNome(e.target.value)} />
                        <input type='text' placeholder='Preço' value={Preco} onChange={e => setPreco(e.target.value)} />
                    </div>

                    <div className='center-right'>
                        <label>
                            <input type='text' placeholder='Promoção' value={PrecoPromo} onChange={e => setPrecoPromo(e.target.value)}/>


                        </label>

                        <input type='text' placeholder=' estoque' value={Estoque} onChange={e => setEstoque(e.target.value)}/>
                    </div>

                    <div className='end-right'>



                        <select id='marca' name='marca'>
                            <option value={0}> Marca</option>

                        </select>

                        <select>
                            <option> Categoria</option>
                        </select>

                        <select >
                            <option> Promoção? </option>
                            <option> Sim </option>
                            <option> Não </option>
                        </select>


                        <select>
                            <option> Destaque</option>
                            <option> Sim </option>
                            <option> Não </option>
                        </select>

                        <select>
                            <option> Disponivel</option>
                            <option> Sim </option>
                            <option> Não </option>
                        </select>
                    </div>






                    <textarea placeholder='Descrição' className='Description'>

                    </textarea >








                </div>

                <button className='buttons'> Adicionar produto</button>
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