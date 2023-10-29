import './index.scss'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../../components/cabecalho'
import CardProduto from '../../../components/cardDestaque'
import Rodape from '../../../components/rodape'

export default function Cardaudio() {
    
      return (

<div className='categorias'>
      <Header />

      <div className='start'>
<div className='liner' />
            <h1 className='destaque'>Sopro</h1>
          
            <div className='liner2' /> 
</div>

<div className='produtos'>
      <CardProduto />
      <CardProduto />
      <CardProduto />
      <CardProduto />
      <CardProduto />
</div>

<div className='start'>
<div className='liner' />
            <h1 className='destaque'>Audio</h1>
            <div className='liner2' /> 
</div>

<div className='produtos'>
      <CardProduto />
      <CardProduto />
      <CardProduto />
      <CardProduto />
      <CardProduto />
</div>

<div className='start'>
<div className='liner' />
            <h1 className='destaque'>Bateria/Percussão</h1>
            <div className='liner2' /> 
</div>

<div className='produtos'>
      <CardProduto />
      <CardProduto />
      <CardProduto />
      <CardProduto />
      <CardProduto />
</div>


<div className='start'>
<div className='liner' />
            <h1 className='destaque'>Cordas</h1>
            <div className='liner2' /> 
</div>

<div className='produtos'>
      <CardProduto />
      <CardProduto />
      <CardProduto />
      <CardProduto />
      <CardProduto />
</div>


<div className='start'>
<div className='liner' />
            <h1 className='destaque'>Teclas</h1>
            <div className='liner2' /> 
</div>

<div className='produtos'>
      <CardProduto />
      <CardProduto />
      <CardProduto />
      <CardProduto />
      <CardProduto />
</div>

<Rodape />

</div>

    )}