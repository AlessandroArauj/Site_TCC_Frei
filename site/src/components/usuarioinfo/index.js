import './index.scss'
import { ToastContainer, toast } from 'react-toastify';
import storage from 'local-storage';
import { useEffect, useState } from 'react';
import { BuscarImagem, ListarProdutosPorID } from '../../api/produtoApi';
import { useNavigate } from 'react-router-dom';
import { EditarUsuario } from '../../api/loginUserApi';



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

    const navigate = useNavigate();

    async function EditarPerfil() {
        try {
            console.log('Chamando EditarUsuario com os seguintes parâmetros:', usuario, nasci, celular, endereco, email, id);
            const resposta = await EditarUsuario(usuario, nasci, celular, endereco, email, id);
            alert('Usuário alterado');
    
            storage.remove('usuario-logado');
            navigate('/');
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





    return (
        <div className='conteudoOption'>



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



            <section className='senhaSeguranca' id='senhaSeguranca'>

                <div className='Seg'>
                    <h1> Altere sua senha</h1>
                    <div className='senhas'>
                        <input type='text' placeholder='SENHA  ATUAL' />
                        <input type='text' placeholder='NOVA  SENHA' />
                        <input type='text' placeholder='CONFIRMAR' />
                    </div>
                    <div className='meio'>

                        <div />
                        <p>ou</p>
                        <div />
                    </div>


                    <button className='bot'>Excluir conta</button>
                </div>

            </section>


            <section className='notificacao' id='notificacao'>
                <div className='Pedidos'>



                    {itens.map(item =>
                        <div className='CardCarrinho' onClick={() => navigate(`/progresso/${item.produto.ID}`)}>

                            <div className='direita'>



                                <div className='imagemProduto'>

                                    <img className='ProdutoImagemCarrinho' alt='Imagens' src={BuscarImagem(item.produto.IMAGEM)} />

                                </div>

                                <div className='infosProdutos'>

                                    <div className='InfosTextos'>

                                        <h3></h3>
                                        <p>Produto: {item.produto.PRODUTO}</p>
                                        <p>Preço do Produto: R${item.produto.PRECO}</p>

                                    </div>

                                </div>

                            </div>

                            <div className='quanti' >





                            </div>

                            <div className='excluir'>



                            </div>

                        </div>
                    )}


                </div>

            </section>



            <script src='./script.js' />
        </div>
    )
}