import './index.scss'
import Header from '../../../components/cabecalho'
import Rodape from '../../../components/rodape'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BuscarImagem, ListarProdutosPorID } from '../../../api/produtoApi';


export default function Progresso(){

    const [produtos, setProdutos] = useState({});
    const id = useParams().id;
    const navigate = useNavigate();

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

    return(
        
        <div className='progresso'>
            <Header />
            <div className='titulo'>
                <h1> Progresso do produto</h1>
            </div>

            <div className='meio'>
                <img src={BuscarImagem(produtos.IMAGEM)} className='imgg'></img>
                <p>Seu código de verificação é 84593.
                    Referente ao produto <b>{produtos.PRODUTO}</b>
                </p>
            </div>

            <div className='img' >

            <img src='../../assets/images/barra.png'></img>

            </div>
            


            <div className='divButt'>
                <button className='buttons'>Atualizar instruções de entrega do produto</button>
                <button className='buttons'>Cancelar esta entrega</button>
            </div>

            <Rodape />
        </div>
    )
}