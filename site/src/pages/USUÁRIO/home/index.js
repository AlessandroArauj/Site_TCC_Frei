import './index.scss';
import Cabecalho from '../../../components/cabecalho/index.js';
import Rodape from '../../../components/rodape';
//import './script.js';
import { Link } from 'react-router-dom';

function Home() {


  return (
    <div className="pageHome">
      < Cabecalho />
      <nav className='nav-cabe'>

        <select>
          <option>Sopro</option>
        </select>

        <select>
          <option>Bateria e Percurssão</option>
        </select>

        <select>
          <option>Teclas</option>
        </select>

        <select>
          <option>Cordas</option>
        </select>

        <select>
          <option>Audio</option>
        </select>

      </nav>

      <section className='f1'>
        <div className='slider'>
          <div className='slides'>
            <input type='radio' name='radio-btn' id='radio1' />
            <input type='radio' name='radio-btn' id='radio2' />
            <input type='radio' name='radio-btn' id='radio3' />
            <input type='radio' name='radio-btn' id='radio4' />



            <div className='Slide first'>
              <img src='https://i.ytimg.com/vi/yUJwC7INGNo/maxresdefault.jpg' />

            </div>

            <div className='Slide'>
              <img src='https://media.istockphoto.com/id/1219335974/pt/foto/instruments-in-white-wooden-background.jpg?s=612x612&w=0&k=20&c=lbDVBVKGH1BN_EBDPGsMaJiAVIPyxCbQHfd41AY1NfA=' />
            </div>

            <div className='Slide'>
              <Link>

                <button> Compre já</button>
              </Link>
            </div>

            <div className='Slide'>
              <Link>
                <button> Não sei maizi</button>
              </Link>
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




      <section className='f2'>
        <h1>Marcas</h1>
        <div className='line' />


        <div>
          <div>
            <img src='../../../assets/images/Roland.png' className='img-start-start' />
            <img src='../../../assets/images/Yamaha.png' className='img-start-center' />
            <img src='../../../assets/images/Boss.png' />
          </div>

          <div>
            <img src='../../../assets/images/bose.png' className='img-end-start' />
            <img src='../../../assets/images/tama.png' className='img-end-center' />
            <img src='../../../assets/images/Greatsch.png' className='img-end-end' />
          </div>
        </div>
      </section>


      <section className='f3'>
        <div className='cima-f3'>
          <div className='line' />
          <h1> Produtos em Destaque</h1>
          <div className='line2' />
        </div>


        
        <div>

        </div>
      </section>

      <section className='f4'>

        <div>
          <h1>Apenas produtos me promoção</h1>
        </div>

        <div>
          <button> Saiba mais</button>
        </div>

      </section>

      <section className='f5'>
        <div className='line' />
        <h1> Com os menores preços</h1>
        <div className='line2' />
      </section>

      <section className='f6'>
        <div>
          <img src=' ' />

          <div className=' text-f6'>
            <h1></h1>
            <div></div>
          </div>
        </div>

        <div>
          <input type='text' placeholder='Insira seu email' />
          <button> Cadastrar </button>
        </div>
      </section>

    </div>
  );
}

export default Home;
