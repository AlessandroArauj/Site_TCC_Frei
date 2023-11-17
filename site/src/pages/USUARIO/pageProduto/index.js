import './index.scss'

import CompProduto from '../../../components/CompPageProduto/index.js'
import { useNavigate, useParams } from 'react-router-dom'
import { BuscarImagem, ListarProdutosDestaques, ListarProdutosPorID } from '../../../api/produtoApi.js';
import { useEffect, useState } from 'react';
import Header from '../../../components/cabecalho';
import Rodape from '../../../components/rodape/index.js';


export default function PageProduto(){

    const id = useParams().id;
    const navigate = useNavigate();

    const [produto, setProduto] = useState({});
    const [preco, setPreco] = useState(0)

    const [produtos, setProdutos] = useState([]);

    async function CarregarProduto() {
      try {
        const resp = await ListarProdutosDestaques();
        setProdutos(resp);
        console.log(resp);
  
      } catch (err) {
        console.log(err.message);
      }
    }

    

    useEffect(() => {
        CarregarProduto();
    }, [])

    
    
    async function CarregarProduto() {
        try {
          const resp = await ListarProdutosPorID(id);
    
          
          setPreco(Number(resp.PRECO) - Number(resp.PRECOPROMO))
    
          setProduto(resp);
          
    
        } catch (err) {
          console.log(err.message);
        }
      }
    
    
      

    return(
        <div className='PageProduto'>
            

            <Header />
            <CompProduto produtos={produto} precos = {preco}/>


           
            <Rodape />   
            
        </div>
    )

    
}