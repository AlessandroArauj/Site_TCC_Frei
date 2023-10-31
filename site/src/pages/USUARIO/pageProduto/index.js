import './index.js'
import Cabecalho from '../../../components/cabecalho/index.js'
import CompProduto from '../../../components/CompPageProduto/index.js'
import { useParams } from 'react-router-dom'


export default function PageProduto(){

    const id = useParams().id;
    
    

    return(
        <div className='PageProduto'>
            <div>
            <Cabecalho />
            </div>
            
            <CompProduto />
        
            
            
        </div>
    )

    
}