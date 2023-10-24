import './index.scss';
import Header from '../../../components/cabecalho/index.js'
import Rodape from '../../../components/rodape/index.js';
import { carrossel } from './script'
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import CardProduto from '../../../components/cardDestaque';
import CardProdutoMenor from '../../../components/cardMenorPreco';


function Home() {



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


        <p>Sopro</p>



        <p>Bateria e Percurssão</p>



        <p>Teclas</p>



        <p>Cordas</p>



        <p>Audio</p>


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
          <CardProduto addcarousel={carousel} />



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


          <CardProdutoMenor addcarousel2={carousel2} />



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
