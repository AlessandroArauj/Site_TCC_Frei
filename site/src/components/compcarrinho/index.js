import { Link, useNavigate } from 'react-router-dom'
import './index.scss'
import { BuscarImagem } from '../../api/produtoApi'
import { useState } from 'react'
import storage from 'local-storage'
import { ToastContainer, toast } from 'react-toastify';



export default function Compcarrinho(props) {
  // const [subTotal, setSubTotal] = useState(0)
  const [qtdProduto, setQtdProduto] = useState(props.item.qtd)
  const navigate = useNavigate()

  function remover() {
    props.removerItem(props.item.produto.ID)
    toast.dark('Item Removido do carrinho')
    window.location.reload()
    
  }

  function calcularSubTotal() {
    const subtotal = qtdProduto * props.item.produto.PRECO
    return subtotal
  }

  function alterarQUantidade(novaQtd) {
    setQtdProduto(novaQtd);
    let carrinho = storage('carrinho')
    let itemStorage = carrinho.find(item => item.id == props.item.produto.ID)
    itemStorage.qtd = novaQtd;

    storage('carrinho', carrinho)

    window.location.reload()
  }

  console.log(props.item.qtd);

  return (
    <div className='compCarrinho'>
      <ToastContainer />

      <div className='conteinerCarrinho'>

        <div className='CardCarrinho'>

          <div className='direita'>

            <div className='imagemProduto'>

              <img className='ProdutoImagemCarrinho' alt='Imagens' src={BuscarImagem(props.item.produto.IMAGEM)} />

            </div>

            <div className='infosProdutos'>

              <div className='InfosTextos'>

                <h3>{props.item.produto.PRODUTO}</h3>
               
                <p>Preço do Produto: R${props.item.produto.PRECO}</p>
                <p>Promoção: R${props.item.produto.PRECOPROMO}</p>
              </div>

            </div>

          </div>

          <div className='quanti' >

            <label> Quantidade </label>
            <select value={qtdProduto} onChange={e => alterarQUantidade(e.target.value)}>

              <option onClick={() => window.location.reload()}>1</option>
              <option onClick={() => window.location.reload()}>2</option>
              <option onClick={() => window.location.reload()}>3</option>
              <option onClick={() => window.location.reload()}>4</option>
              <option onClick={() => window.location.reload()}>5</option>

            </select>

            <h4>SubTotal: R${calcularSubTotal()}</h4>

          </div>

          <div className='excluir'>

            <button className='butt' onClick={remover}> Excluir do carrinho</button>

          </div>

        </div>



      </div>

    </div>
  )
}