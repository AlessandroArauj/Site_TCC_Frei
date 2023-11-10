import './index.js'
import Cabecalho from '../../../components/cabecalho/index.js'
import CompProduto from '../../../components/CompPageProduto/index.js'
import { useParams } from 'react-router-dom'
import { ListarProdutosPorID } from '../../../api/produtoApi.js';
import { useEffect, useState } from 'react';


export default function PageProduto(){

    const id = useParams().id;

    const [produto, setProduto] = useState({});

    

    useEffect(() => {
        CarregarProduto();
    }, [])

    
    
    async function CarregarProduto() {
        try {
          const resp = await ListarProdutosPorID(id);
    
          
          
    
          setProduto(resp);
          
    
        } catch (err) {
          console.log(err.message);
        }
      }
    
    
      

    return(
        <div className='PageProduto'>
            <div>
            <Cabecalho />
            </div>
            
            <CompProduto produtos={produto}/>
        
            
            
        </div>
    )

    
}