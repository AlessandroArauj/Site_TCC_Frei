import './index.scss'
import Header from '../../../components/cabecalho'
import Rodape from '../../../components/rodape'
import Compcarrinho from '../../../components/compcarrinho'
import storage from 'local-storage'
import { useEffect, useState } from 'react'
import { ListarProdutosPorID } from '../../../api/produtoApi'
import { useNavigate } from 'react-router-dom'
import { PedidoAdd } from '../../../api/pedidosApi'
import { ToastContainer, toast } from 'react-toastify'


export default function PageCarrinho() {

    const navigate = useNavigate();
    const [itens, setItem] = useState([]);
    const [IDuser, SetIDuser] = useState(0);
    const [produtosIds, setProdutosIds] = useState([]);

    console.log();

    function qtdItens() {
        return itens.length;
    }

    function calcularValorTotal() {
        let total = 0;
        for (let item of itens) {
            total = total + item.produto.PRECO * item.qtd;
        }
        return total;
    }

    function RemoverItem(id) {
        let carrinho = storage('carrinho');
        carrinho = carrinho.filter(item => item.id !== id);

        storage('carrinho', carrinho);
        carregarCarrinho();
        navigate('/carrinho');
    }

    async function AdicionarPedidos() {
        try {
            for (let produtoId of produtosIds) {

                if (IDuser !== 0 && produtoId !== 0) {

                    const resposta = await PedidoAdd(IDuser, produtoId);
                    toast.success('Pedido Realizado!');
                    storage.remove('carrinho');
                    
                }

                else {

                    toast.dark('Pedido não realizado!')
                }

                window.location.reload()
            }





        } catch (err) {
            console.log(err.message);
        }
    }

    async function carregarCarrinho() {
        let carrinho = storage('carrinho');
        if (carrinho) {
            let array = [];
            let idsArray = [];

            for (let produto of carrinho) {
                let p = await ListarProdutosPorID(produto.id);

                array.push({
                    produto: p,
                    qtd: produto.qtd,
                });

                idsArray.push(p.ID); // Adiciona o ID do produto ao array de IDs
            }

            setItem(array);
            setProdutosIds(idsArray); // Define o array de IDs dos produtos

        }
    }


    useEffect(() => {
        carregarCarrinho()
    }, [])

    useEffect(() => {
        if (!storage('usuario-logado')) {
            navigate('/loginUser')
        }
        else {
            const usuariologado = storage('usuario-logado');
            SetIDuser(usuariologado.id);
        }
    }, []);



    return (
        <div className='Carrinho-page'>
            <ToastContainer />
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

                                <h3 className='p'> Frete: *GRÁTIS* </h3>
                                <h3>Total de Produtos: {qtdItens()}  </h3>

                            </div>

                            <div className='bbaixo'>

                                <h2>Total: R${calcularValorTotal()} </h2>
                                <button className='butt-carrinho' onClick={AdicionarPedidos}> Finalizar pedido </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>



            <Rodape />

        </div>
    )
}