import './index.scss'
import Header from '../../../components/cabecalho'
import Rodape from '../../../components/rodape'
import { useNavigate, useParams, } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BuscarImagem, ListarProdutosPorID } from '../../../api/produtoApi';


export default function Progresso() {

  const [produtos, setProdutos] = useState({});
  const id = useParams().id;
  const navigate = useNavigate();



  const [progresso, setProgresso] = useState('')

  async function CarregarProduto() {
    try {
      const resp = await ListarProdutosPorID(id);



      setProdutos(resp);


    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    CarregarProduto()
  })

  useEffect(() =>{
    ProgreBarra()
  }, [])



  function ProgreBarra(){

    if( id == 1){
        setProgresso('one')
    }

    else if( id == 2){
      setProgresso('two')
      
    }

    else if( id == 3){
      setProgresso('three')
    }

    else if ( id == 4){
      setProgresso('four')
    }
  }

  return (


    <div className='ProdProgre'>
      <Header />

      <div className='pr'>

        <div className='cardProgre'>

          <div className=' bolinhas'>
            <div>
              <div></div>
              <p> enviando chamado</p>
            </div>
            <div className='lineHori' />
            <div>
              <div> </div>
              <p> pedido em andamento</p>
            </div>
            <div className='lineHori' />

            <div>
              <div> </div>
              <p> pedido a caminho</p>
            </div>
            <div className='lineHori' />

            <div>
              <div></div>
              <p>  pedido finalizado</p>
            </div>
          </div>

          <div className='barra'>
            <div className='esboco'>
              <div className={progresso}>
                <p> PORCENTAGEM</p>
              </div>
            </div>
          </div>


         
        </div>
      </div>
      <Rodape />
    </div>
  )
}