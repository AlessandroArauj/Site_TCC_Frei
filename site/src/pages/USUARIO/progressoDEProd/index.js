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
        
        
           <div className='encaminhamentoProduto'>
            <Header />
            <Rodape />
           </div>
    )
}