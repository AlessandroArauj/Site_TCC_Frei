import { useEffect, useState } from 'react'
import './index.scss'
import storage from 'local-storage'
import { BuscarCartaoPorID, addCartao } from '../../api/loginUserApi'
import { ToastContainer, toast } from 'react-toastify';

export default function CompCartao() {

    const [titular, setNomeTitular] = useState('')
    const [idUser, setIdUser] = useState(0)
    const [cvv, setCvv] = useState('')
    const [validade, setValidade] = useState('')
    const [cpf, setCPF] = useState('')
    const [numero, setNumero] = useState(0);
    const [cartoes, setCartoes] = useState([]);


    async function BuscarCartao() {
        
        const r = await BuscarCartaoPorID(idUser)
        setCartoes(r)

    }

    async function addCartaoNovo() {
        const r = await addCartao(idUser, titular, cvv, validade, cpf, numero)
        toast.dark('Cartão Cadastrado')

        setNomeTitular('')
        setCvv('')
        setValidade('')
        setCPF('')
        setNumero(0);
        window.location.reload()
    }

    function fecharModal1() {
        const Modal1 = document.getElementById('Modal1')
        Modal1.classList.remove('abrir')
    }

    function abrirModal1() {
        const editar = document.getElementById('Modal1')
        editar.classList.add('abrir')

    }

    function AbrirModal2() {
        const Modal2 = document.getElementById('Modal2')
        Modal2.classList.add('abrir')

        const Modal1 = document.getElementById('Modal1')
        Modal1.classList.remove('abrir')
    }

    function fecharModal2() {
        const Modal2 = document.getElementById('Modal2')
        Modal2.classList.remove('abrir')
    }

    useEffect(() => {
        BuscarCartao()
    })

    useEffect(() => {
        
        if (storage('usuario-logado')) {
            const usuariologado = storage('usuario-logado');
            setIdUser(usuariologado.id);
            console.log(idUser);
        }
        
    }, [storage('usuario-logado')]);


    return (
        <div className='compCartao'>
            <ToastContainer />

            <div className='blur'>
                <div className='page-cadastrar-cartao' id='Modal2'>
                    <div className='card'>
                        <div className='titulo'>
                            <h1 className='x' onClick={fecharModal2}>X</h1>
                            <h1 className='forma'>Cadastrar Cartão</h1>
                            <div className='linha'></div>
                        </div>
                        <div className='subcard'>
                            <div className='info'>
                                <div className='container'>
                                    <input type='text' placeholder='Numero do Cartão' required  value={numero} onChange={e => setNumero(e.target.value)}/>
                                    <input type='text' placeholder='Validade' required value={validade} onChange={e => setValidade(e.target.value)}/>
                                </div>
                                <div className='container'>
                                    <input type='text' placeholder='Nome do titular' required value={titular} onChange={e => setNomeTitular(e.target.value)}/>
                                </div>
                                <div className='container'>
                                    <input ctype='text' placeholder='CVV' required value={cvv} onChange={e => setCvv(e.target.value)}/>
                                    <input type='text' placeholder='CPF' required value={cpf} onChange={e => setCPF(e.target.value)}/>
                                </div>

                                <div className='butonn'>

                                    <button onClick={addCartaoNovo}>Cadastrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>















                <div className='page-add-cartao' id='Modal1'>
                    <div className='card'>
                        <h1 className='sair' onClick={fecharModal1}>X</h1>
                        <h1> ESOLHA FORMA DE PAGAMENTO</h1>
                        <div className='subcard'>
                            <div className='cima'>
                                <h1> CARTÕES CADASTRADOS</h1>
                                <div>
                                <select>
                                    {cartoes.map(item =>
                                        
                                        <option>Titular:{item.Titular}, Numero: {item.NumeroDoCartao}</option>
                                        
                                        )}
                                    </select>
                                    
                                    <label>
                                        <h1> Parcelar em:</h1>
                                        <select value={'Parcelar'}>
                                            <option>6x</option>
                                            <option>12x</option>
                                            <option>24x</option>
                                        </select>
                                    </label>

                                    <button onClick={AbrirModal2}>CADASTRAR NOVO CARTÃO</button>
                                </div>
                            </div>

                            <div className='meio'>
                                <div className='line' />
                                <h1> outras formas</h1>
                                <div className='line' />
                            </div>

                            <div className='baixo'>
                                <div>
                                    <button> PIX <img /></button>
                                    <h1>OU</h1>
                                    <button> BOLETO <img /></button>
                                </div>

                                <div>
                                    <div>
                                        <h1>TOTAL:</h1>

                                    </div>

                                    <button>Efetuar compra</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>





            </div>


        </div>
    )
}