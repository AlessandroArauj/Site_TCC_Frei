import './index.scss'

import CompProduto from '../../../components/CompPageProduto/index.js'
import { useParams } from 'react-router-dom'
import { ListarProdutosPorID } from '../../../api/produtoApi.js';
import { useEffect, useState } from 'react';


export default function PageProduto(){

    const id = useParams().id;

    const [produto, setProduto] = useState({});
    const [preco, setPreco] = useState(0)

    

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
            

            
            <CompProduto produtos={produto} precos = {preco}/>
        
            
            
        </div>
    )

    
}