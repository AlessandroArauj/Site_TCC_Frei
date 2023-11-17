import './index.scss'
import Header from '../../../components/cabecalho'
import Rodape from '../../../components/rodape'
import Compcarrinho from '../../../components/compcarrinho'
import storage from 'local-storage'
import { useEffect, useState } from 'react'
import { ListarProdutosPorID } from '../../../api/produtoApi'


export default function PageCarrinho() {

    const [itens, setItem] = useState([]);

    function qtdItens() {
        return itens.length;
    }

    function calcularValorTotal() {
        let total = 0;
        for (let item of itens) {
            total = total + item.produto.PRECO * item.qtd
        }
        return total;
        
    }

    function RemoverItem(id) {
        let carrinho = storage('carrinho');
        carrinho = carrinho.filter(item => item.id != id)

        storage('carrinho', carrinho)
        carregarCarrinho()
    }

    async function carregarCarrinho() {
        let carrinho = storage('carrinho');
        if (carrinho) {
            let array = []

            for (let produto of carrinho) {
                let p = await ListarProdutosPorID(produto.id)

                array.push({
                    produto: p,
                    qtd: produto.qtd

                })

                console.log(array);
                setItem(array)
            }
        }
    }

    useEffect(() => {
        carregarCarrinho()
    }, [])

    return (
        <div className='Carrinho-page'>
            <Header />

            <div className='contPrincipal' >

                <div className='conteiner'>

                    <div className='Conteudo' >

                        <div className='Direita'>

                            {itens.map(item =>

                                <Compcarrinho item={item} removerItem={RemoverItem} carregarCarrinho={carregarCarrinho} />
                            )}
                            


                        </div>

                    </div>


                </div>

                <div className='conteiner2' >

                    <div className='conteudo2'>



                        <div className='baixo2' >

                            <div>

                                <h3 className='p'> frete: GRÁTIS </h3>
                                <h3>Total de Produtos: {qtdItens()}  </h3>

                            </div>

                            <div className='bbaixo'>

                                <h2>Total: R${calcularValorTotal()} </h2>
                                <button className='butt-carrinho' > Finalizar pedido </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>



            <Rodape />

        </div>
    )
}