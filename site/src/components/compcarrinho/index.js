import { Link } from 'react-router-dom'
import './index.scss'



export default function Compcarrinho() {
return(
    <div className='compcarrinho'>

      <div className='img'>
       <img className='imagem' />
      </div>



      <div className='avaliacao'>
        <p className='nome'>Violao iamarra knmdlkasalkn djkasjs sakjdsakj jushdnas kjjsf dkfjkasmn dfkjfkdsnflk dfj kldfsklj ikjfldsk </p>
        
        <p className='promocao'>47,90 RS</p>
        <p className='preco_final'>30,90 RS</p>
      </div>


      <div className='right'>
      <div className='valores'>
         <p className='adicionar'> Adicionar</p>
         <input className='valor' type='number' min="0" max="10"></input>
      </div>
        <button className='tirar'>Remover do carrinho</button>
       


      </div>

    </div>
)}