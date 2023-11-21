import './index.scss'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Header from '../../../components/cabecalho'
import CardProduto from '../../../components/cardDestaque'
import Rodape from '../../../components/rodape'
import { useEffect, useState } from 'react'
import { BuscarImagem, ListarProdutosPorCategoriaID, listarCategoriasIDNomes } from '../../../api/produtoApi'

export default function Cardaudio() {

      const navigate = useNavigate()
      const id = useParams().id;
      const [produto, setProduto] = useState([]);
      const [categorias, setCategorias] = useState({})


      const [fundo, setFundo] = useState('')

      async function listarCategorias() {
            try {
                  const resp = await listarCategoriasIDNomes(id)
                  setCategorias(resp)

            } catch (err) {
                  console.log(err.message)

            }
      }

      async function ListarPorCategoria() {
            try {
                  const resp = await ListarProdutosPorCategoriaID(id);
                  setProduto(resp);

            } catch (err) {
                  console.log(err.message);
            }
      }


      useEffect(() => {
            listarCategorias()
      }, [])

      useEffect(() => {
            ListarPorCategoria()
      }, [])

      useEffect(() => {
            Fundo()
      }, [])

      function Fundo() {


            if (id == 1) {
                  setFundo('audios')
            }
            else if (id == 2) {
                  setFundo('cordas')
            }
            else if (id == 3) {
                  setFundo('teclas')
            }
            else if (id == 4) {
                  setFundo('percussao')
            }
            else if (id == 5) {
                  setFundo('sopro')
            }
      }


      return (

            <div className='categorias'>
                  <Header />

                  <div className='principalcontCat'>

                        <div className='tituloCat'>

                              <h1 className={fundo}>{categorias.Categoria}</h1>



                        </div>
                        <div className='conteiner'>

                              <div className='subcont' >

                                    <div className='conteudoCat'>

                                          {produto.map(item => (
                                                <div className='card-item' onClick={() => navigate('/pageProduto/' + item.ID)}>


                                                      <div className='superior'>
                                                            <img className='imagem-produto' src={BuscarImagem(item.IMAGEM)} />
                                                      </div>

                                                      <div className='line-carousel' />

                                                      <div className='inferior'>
                                                            <div className='infos-prod'>

                                                                  <div className='NomesProdutos'>

                                                                        <p>{item.PRODUTO}</p>

                                                                  </div>


                                                                  <div className='infosprodutos'>
                                                                        <h3 className={`preco ${parseFloat(item.PRECOPROMO) === 0 ? 'zero-price' : ''}`}>
                                                                              R${item.PRECO}
                                                                        </h3>
                                                                        <h2 className='precopromo' style={{ display: parseFloat(item.PRECOPROMO) === 0 ? 'none' : 'block' }}>
                                                                              R${item.PRECOPROMO}
                                                                        </h2>
                                                                        <p>Frete Grátis</p>

                                                                  </div>


                                                            </div>



                                                      </div>
                                                </div>
                                          ))}

                                    </div>

                              </div>

                        </div>

                  </div>


                  <Rodape />

            </div>

      )
}