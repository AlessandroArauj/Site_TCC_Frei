import { Link } from 'react-router-dom'
import './index.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'





export default function AddProduto() {

    const [marcasTipo, setTipoMarcas] = useState([])

    const [Nome, setNome] = useState('');
    const [Preco, setPreco] = useState('');
    const [Promo, setPromo] = useState(false);
    const [Estoque, setEstoque] = useState(0);
    const [Marca, setMarca] = useState(0);
    const [Destaque, setDest] = useState(false);
    const [Disponivel, setDisp] = useState(false);
    const [Descricao, setDesc] = useState('');
    const [id, setId] = useState(0);
    


    

    async function ProdutoSalvar() {
        try {
            let Produtos = {

                nome: setNome,
                promo: setPromo,
                estoque: setEstoque,
                idmarca: setMarca,
                destaque: setDest,
                disp: setDisp,
                desc: setDesc


            }

            if (id == 0) {
                let r = await axios.post('http://localhost:5000/produto', Produtos)
                alert('Produto Cabrastado')

            }

            else {

                let r = await axios.put('http://localhost:5000/produto', Produtos)
                alert('Produto Alterado')
            }


        } catch (err) {


        }

    }


    async function listarMarcas() {
        let r = await axios.get('http://localhost:5000/produto/marca')
    }

    useEffect(() => {
        //
        listarMarcas();
      }, [])




    return (


        <div className="addProduto">
            <h1>Insira ou Edite o Produto</h1>
            <Link> Voltar p/ Home</Link>

            <div className='f1'>

                <div className='left'>
                    <div className='start-left'>
                        <div className='lado'>
                            <div />
                        </div>
                        <div className='prin' />
                    </div>

                    <div className='end-left'>
                        <h1> Cores :</h1>
                        <div />
                    </div>
                </div>

                <div className='right'>

                    <div className='start-right'>
                        <input type='text' placeholder='Nome' value={Nome} onChange={e => setNome(e.target.value)} />
                        <input type='text' placeholder='Preço' value={Preco} onChange={e => setPreco(e.target.value)} />
                    </div>

                    <div className='center-right'>
                        <label>
                            <input type='text' placeholder='Promoção' value={Promo} onChange={e => setPromo(e.target.value)} />

                        </label>

                        <input type='text' placeholder=' estoque' value={Estoque} onChange={e => setEstoque(e.target.value)} />
                    </div>

                    <div className='end-right'>
                        <select id='marca' name='marca' value={Marca} onChange={e => setMarca(e.target.value)}>
                            <option value={0}> Marca</option>

                        </select>

                        <select>
                            <option> Destaque</option>
                        </select>

                        <select>
                            <option> Disponivel</option>
                        </select>
                    </div>



                    <textarea placeholder='Descrição' className='Description'>

                    </textarea >




                </div>


            </div>


            <button> Adicionar produto</button>
        </div>
    )

}