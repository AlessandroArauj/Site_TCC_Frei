import './index.scss'
import Header from '../../../components/cabecalho'
import Rodape from '../../../components/rodape'
import { Link, useNavigate, useParams, } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BuscarImagem, ListarProdutosPorID } from '../../../api/produtoApi';


export default function Progresso() {

  const [produtos, setProdutos] = useState({});
  const id = useParams().id;
  const idP = useParams().id2;
  const navigate = useNavigate();



  const [progresso, setProgresso] = useState('')
  const [boll, setBoll] = useState('')

  async function CarregarProduto() {
    try {
      const resp = await ListarProdutosPorID(idP);



      setProdutos(resp);


    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    CarregarProduto()
  })

  useEffect(() => {
    ProgreBarra()
  }, [])



  function ProgreBarra() {

    if (id == 1) {
      setProgresso('one')
    }

    else if (id == 2) {
      setProgresso('two')

    }

    else if (id == 3) {
      setProgresso('three')
    }

    else if (id == 4) {
      setProgresso('four')
    }
  }



  useEffect(() => {
    ProgreBoll()
  }, [])


  function ProgreBoll() {

    if (id == 1) {
      setBoll('oneboll')
    }

    else if (id == 2) {
      setBoll('twoboll')

    }

    else if (id == 3) {
      setBoll('threeboll')
    }

    else if (id == 4) {
      setBoll('fourboll')
    }
  }
  return (


    <div className='ProdProgre'>
      <Header />

      <div className='pr'>

        <div className='cardProgre'>

          <div className=' bolinhas' >
            <div>
              <div>

                <div className={boll}></div>
              </div>
              <p> enviando chamado</p>
            </div>
            <div className='lineHori' />
            <div>
              <div>

                <div className={boll}> </div>
              </div>
              <p> pedido em andamento</p>
            </div>
            <div className='lineHori' />

            <div>
              <div>

                <div className={boll}> </div>
              </div>
              <p> pedido a caminho</p>
            </div>
            <div className='lineHori' />

            <div>
              <div>

                <div className={boll}></div>
              </div>
              <p>  pedido finalizado</p>
            </div>
          </div>

          <div className='barra'>
            <div className='esboco'>
              <div className={progresso}>

              </div>
            </div>
          </div>

          <div className='sla'>
            <>{produtos.PRODUTO}</>
            
            <Link to={'/perfilusuario'}>
              <button className='buttonpedi'>
                Voltar para perfil</button>
            </Link>

          </div>





        </div>
      </div>
      <Rodape />
    </div>
  )
}