import './index.js'
import Cabecalho from '../../../components/cabecalho/index.js'
import CompProduto from '../../../components/CompPageProduto/index.js'
import { useParams } from 'react-router-dom'
import { ListarImagemPorIDinstrumentos, ListarProdutosPorID } from '../../../api/produtoApi.js';
import { useEffect, useState } from 'react';


export default function PageProduto(){

    const id = useParams().id;

    const [produto, setProduto] = useState({});

    useEffect(() => {
        CarregarProduto()
    }, [])

    
    
    async function CarregarProduto() {
        try {
          const resp = await ListarProdutosPorID(id);
    
          let array = resp;
    
          
            let p = array;
            let img = await ListarImagemPorIDinstrumentos(p.ID);
    
            p.img = img[0].IMAGEM;
          
    
          setProduto(array);
          console.log(array);
    
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