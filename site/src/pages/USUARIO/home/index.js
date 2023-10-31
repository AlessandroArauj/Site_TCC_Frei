import './index.scss';
import Header from '../../../components/cabecalho/index.js'
import Rodape from '../../../components/rodape/index.js';
import { carrossel } from './script'
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import CardProduto from '../../../components/cardDestaque';
import CardProdutoMenor from '../../../components/cardMenorPreco';

import { ListarImagemPorIDinstrumentos, ListarTodosProdutos, BuscarImagem } from '../../../api/produtoApi';


function Home() {

  const navigate = useNavigate();

  
  const [produto, setProduto] = useState([]);

  // Estudar Depois

  async function CarregarProduto() {
    try {
      const resp = await ListarTodosProdutos();
      
      let array = resp;

      for(let i = 0; i < array.length; i++) {
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


  useEffect(() => {
    CarregarProduto()
  }, [])

  useEffect(() => {
    carrossel()
  }, [])


  const carousel = useRef(null)
  const carousel2 = useRef(null)


  const handleLeftClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft -= carousel.current.offsetWidth

  }

  const handleRightClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft += carousel.current.offsetWidth

  }

  const handleLeftClick2 = (e) => {
    e.preventDefault();
    console.log(carousel2.current.offsetWidth)
    carousel2.current.scrollLeft -= carousel2.current.offsetWidth

  }

  const handleRightClick2 = (e) => {
    e.preventDefault();
    console.log(carousel2.current.offsetWidth)
    carousel2.current.scrollLeft += carousel.current.offsetWidth

  }










  return (
    <div className="pageHome">
      <Header />
      <nav className='nav-cabe'>

        <Link className='link-head' to={'/sopro'}>
          <p className='cardizinho'>Sopro</p>
        </Link>

        <Link className='link-head' to={'/bateria_percusao'}>
          <p className='cardizinho'>Bateria e Percurssão</p>
        </Link>

        <Link className='link-head' to={'/teclas'}>
          <p className='cardizinho'>Teclas</p>
        </Link>

        <Link className='link-head' to={'/cordas'}>
          <p className='cardizinho'>Cordas</p>
        </Link>

        <Link className='link-head' to={'/audio'}>
          <p className='cardizinho'>Audio</p>
        </Link>

      </nav>

      <section className='f1'>
        <div className='slider'>
          <div className='slides'>
            <input type='radio' name='radio-btn' id='radio1' />
            <input type='radio' name='radio-btn' id='radio2' />
            <input type='radio' name='radio-btn' id='radio3' />
            <input type='radio' name='radio-btn' id='radio4' />



            <div className='Slide first'>
              <img src='https://images.musicstore.de/teaser/1600/misc/markenseiten/2020/Y/Yamaha_Header_2020.jpg' />
            </div>

            <div className='Slide'>
              <img src='https://musicshopnepal.com/wp-content/uploads/2021/08/roland-brand-logo.png' />
            </div>

            <div className='Slide'>
              <img src='https://www.logolynx.com/images/logolynx/04/04e2f42d060a203aa96f9ecd874a333d.jpeg' />

            </div>
            <div className='Slide'>
              <img src='https://casiomusic.sg/cdn/shop/files/EMI_Logo-03_1024x.jpg?v=1613543746' />
            </div>

            <div className='navegation-auto'>
              <div className='auto-btn1'></div>
              <div className='auto-btn2'></div>
              <div className='auto-btn3'></div>
              <div className='auto-btn4'></div>
            </div>

          </div>

          <div className='manual-navegation'>
            <label for='radio1' className='manual-btn'></label>
            <label for='radio2' className='manual-btn'></label>
            <label for='radio3' className='manual-btn'></label>
            <label for='radio4' className='manual-btn'></label>
          </div>


        </div>
      </section>

      <section className='faixa-3'>
        <button onClick={handleLeftClick}><img src='../../../assets/images/menor.png' /></button>

        <div className='meio'>
          <div className='cima-f3'>
            <div className='line' />
            <h1> Produtos em Destaque</h1>
            <div className='line2' />
          </div>

          <div className='container'>

            <div className='carousel' ref={carousel}>
              {produto.map((item =>
                <div className='card-item' onClick={() => navigate('/pageProduto/' + item.ID)}>


                  <div className='superior'>
                    <img className='imagem-produto' src={BuscarImagem(item.img)} />
                  </div>


                  <div className='line-carousel' />

                  <div className='inferior'>
                    <p> {item.PRODUTO} </p>
                    <h3 className='preco'>R${item.PRECO}</h3>
                    <h2 className='precopromo'> R${item.PRECOPROMO} </h2>
                    <p>Frete Grátis</p>
                  </div>


                </div>
              ))}

            </div>

          </div>



        </div>

        <button onClick={handleRightClick}><img src='../../../assets/images/maior.png' /></button>
      </section>

      <section className='faixa-4'>

        <div className='left-f4'>
          <h1>Apenas produtos em promoção</h1>
        </div>

        <div className='right-f4'>
          <button> Saiba mais</button>
        </div>

      </section>

      <section className='faixa-5'>
        <button onClick={handleLeftClick2}><img src='../../../assets/images/maior.png' /></button>
        <div className='meio'>
          <div className='cima-f5'>
            <div className='line' />

            <h1> Com os menores preços</h1>

            <div className='line2' />

          </div>


          <div className='container'>
            <div className='carousel' ref={carousel2}>

              <div className='card'>

                <div className='superior'>

                  <img className='imagem-produto' />

                </div>
                <div className='inferior'>

                  <div className='nomeProduto'>
                    <p>--------</p>
                  </div>

                  <div className='precos'>

                    <h3 className='preco'>----</h3>
                    <h2 className='precopromo'>-------</h2>

                  </div>

                  <div className='freteVisual'>

                    <p>Frete Grátis</p>

                  </div>

                </div>

              </div>

            </div>
          </div>



        </div>


        <button onClick={handleRightClick2}><img src='../../../assets/images/maior.png' /></button>



      </section>

      <section className='f6'>
        <div className='esq-f6'>
          <img src='../../../assets/images/Cartas.svg' />

          <div className=' text-f6'>
            <h1> Quer recerber novidades?</h1>
            <hr></hr>
            <div>Cadastre seu email agora</div>
          </div>
        </div>

        <div className='dir-f6'>
          <input type='text' placeholder='Insira seu email' />
          <button> Cadastrar </button>
        </div>
      </section>

      < Rodape />

    </div>
  );
}

export default Home;