import './index.scss'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../../components/cabecalho'
import CardProduto from '../../../components/cardDestaque'
import Rodape from '../../../components/rodape'

export default function Cardaudio() {

      return (

            <div className='categorias'>
                  <Header />

                  <div className='start'>
                        <div className='liner' />
                        <h1 className='destaque'>Categorias</h1>

                        <div className='liner2' />
                  </div>

                  <div className='produtos'>

                        <div className='cardProduto'>



                              <div className='carousel' >

                                    <div className='card'>

                                          <div className='superior'>


                                          </div>

                                          <div className='linhareta' />

                                          <div className='inferior'>

                                                <div className='nomeProduto'>
                                                      <p>  </p>
                                                </div>

                                                <div className='precos'>

                                                      <h3 className='preco'>R$</h3>
                                                      <h2 className='precopromo'> R$</h2>

                                                </div>

                                                <div className='freteVisual'>

                                                      <p>Frete Grátis</p>

                                                </div>

                                          </div>

                                    </div>



                              </div>


                        </div>
                        <div className='cardpro'>

                        </div>

                  </div>

                
                  <Rodape />

            </div>

      )
}