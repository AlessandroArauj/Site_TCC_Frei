import './index.scss'
import { ToastContainer, toast } from 'react-toastify';
import storage from 'local-storage';
import { useEffect, useState } from 'react';
import { BuscarImagem, ListarProdutosPorID } from '../../api/produtoApi';
import { useNavigate } from 'react-router-dom';
import { EditarUsuario } from '../../api/loginUserApi';
import { MostrarPedidosUsuario } from '../../api/pedidosApi';



export default function ConteudoOptions() {

    const [usuario, setUsuario] = useState('');
    const [celular, setCelular] = useState('');
    const [endereco, setEndereco] = useState('');
    const [nasci, setNasci] = useState('');
    const [email, setEmail] = useState('');
    const [itens, setItem] = useState([]);
    const [id, setId] = useState(0)
   



    const [usuarios, setUsuarios] = useState('');
    const [celulares, setCelulares] = useState('');
    const [enderecos, setEnderecos] = useState('');
    const [nasc, setNasc] = useState('');
    const [emails, setEmails] = useState('');

    const [pedidos, setPedidos] = useState([]);

    const navigate = useNavigate();

    async function MostrarMeusPedidos() {
        try {
            const resposta = await MostrarPedidosUsuario(id)
            setPedidos(resposta)


        } catch (err) {
            console.log(err.message);
        }
    }

    async function EditarPerfil() {
        try {

            const resposta = await EditarUsuario(usuario, nasci, celular, endereco, email, id);
            toast.dark('Usuário alterado');


            navigate('/')
            storage.remove('usuario-logado');

        } catch (err) {
            console.log(err.message);
        }
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

    useEffect(() => {

        if (storage('usuario-logado')) {
            const usuariologado = storage('usuario-logado');
            setId(usuariologado.id)
            setUsuarios(usuariologado.nome);
            setCelulares(usuariologado.Celular);
            setEnderecos(usuariologado.Endereço);
            setNasc(usuariologado.Nascimento);
            setEmails(usuariologado.email);
        }
    }, [])

    useEffect(() => {

        if (id > 0) {
            MostrarMeusPedidos()
        }


    }, [id])





    return (
        <div className='conteudoOption'>

            <div className='headerPerfil'>
                <div>
                    <h1>{usuario}</h1>
                    <p1>{email}</p1>
                </div>

                <div className='boll' />
            </div>

            <section className='editarPerfil abrir' id='editarPerfil'>



                <div className='inputs'>
                    <div>
                        <h1> Dados cadastrais</h1>
                        <div />
                        <p>{usuarios}</p>
                        <p>{nasc.substr(0, 10)}</p>
                        <p>{enderecos}</p>
                        <p>{celulares}</p>
                        <p>{emails}</p>

                    </div>
                    <div>
                        <h1> Alterar dados</h1>
                        <div />
                        <input type='text' placeholder=' NOME' onChange={e => setUsuario(e.target.value)} />
                        <input type='date' placeholder=' DATA NASCM' onChange={e => setNasci(e.target.value)} />
                        <input type='text' placeholder=' ENDEREÇO' onChange={e => setEndereco(e.target.value)} />
                        <input type='text' placeholder=' TELEFONE' onChange={e => setCelular(e.target.value)} />
                        <input type='text' placeholder=' EMAIL' onChange={e => setEmail(e.target.value)} />

                    </div>
                </div>


                <button onClick={EditarPerfil}> SALVAR ALTERAÇÕES</button>
            </section>




            <section className='notificacao' id='notificacao'>


                    <h1> SEUS PEDIDOS</h1>



                    <div className='pedidos'>
                        {pedidos.map(item => (
                            <div className='cardPedi'>
                                <div className=' cima'>
                                    <div className='informacoesPedidosDatas'>
                                        <div className='barrinhaAzul'></div> <p>pedido feito em: {item.Data.substr(0, 10)}</p>
                                    </div>
                                    <div>

                                    </div>
                                </div>


                                <div className='subcard'>
                                    <div className='imagemPedido'>
                                        <img className='PedidoImagem' src={BuscarImagem(item.Imagem)} />
                                    </div>

                                    <div className='infoPedi'>

                                        <div className='esquerdo'>
                                            <h1>Nome Produto: {item.Produto}</h1>
                                            <p> vendido e entregue por TOTH Music</p>
                                        </div>

                                        <div className='andamentoDetalhes'>
                                            <h1>Andamento do Produto</h1>
                                            <p> {item.Status} </p>
                                            <div className='VerDetalhes' onClick={() => navigate('/progresso/' + item.IDStatus + '/pedido/' + item.ID)}> Ver Detalhes</div>
                                            
                                        </div>

                                        

                                    </div>
                                </div>


                            </div>
                        ))}

                    </div>


                

            </section>



            <script src='./script.js' />
        </div>
    )
}