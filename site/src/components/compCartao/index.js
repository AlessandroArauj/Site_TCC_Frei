import './index.scss'


export default function CompCartao() {


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


    return (
        <div className='compCartao'>

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
                                    <input type='text' placeholder='Numero do Cartão' required />
                                    <input type='text' placeholder='Validade' required />
                                </div>
                                <div className='container'>
                                    <input type='text' placeholder='Nome do titular' required />
                                </div>
                                <div className='container'>
                                    <input ctype='text' placeholder='CVV' required />
                                    <input type='text' placeholder='CPF' required />
                                </div>

                                <div className='butonn'>

                                    <button onClick={abrirModal1}>Cadastrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>















                <div className='page-add-cartao' id='Modal1'>
                    <div className='card'>

                        <div className='titulo'>
                            <h1 className='sair' onClick={fecharModal1}>X</h1>
                            <h1 className='forma'>ESCOLHER FORMA DE PAGAMENTO</h1>
                            <div className='linha'></div>
                        </div>

                        <div className='subcard'>

                            <p className='subtitulo'>CARTOES CADASTRADOS</p>
                            <div className='parcela'>
                                <select className='cartao'>
                                    <option>naseeeieieii</option>
                                    <option>naseeeieieii</option>
                                    <option>naseeeieieii</option>
                                    <option>naseeeieieii</option>
                                </select>

                                <label className='labelzim'>
                                    <p className='testinho'>PARCELAR EM:</p>
                                    <input className='numero_parcela' type='number'></input>
                                </label>
                                <button className='cadastrar' onClick={AbrirModal2}>Cadastrar Novo Cartão</button>
                            </div>
                            <div className='dd'>
                                <div className='divisinha'></div>
                                <p className='outras'>outras formas</p>
                                <div className='divisinha'></div>
                            </div>
                            <div className='baixo'>
                                <div>   <button className='pix'>pix</button>
                                    <img src='/assets/images/pix.svg'></img>
                                </div>
                                <p>OU</p>
                                <div>
                                    <button className='boleto'>boleto</button>
                                    <img src='/assets/images/image_125.png'></img>
                                </div>
                            </div>
                            <div className='ultima'>
                                <p className='total'>Total:</p>
                                <button className='cadastrar'>Efetuar Compra</button>
                            </div>
                        </div>
                    </div>
                </div>





            </div>


        </div>
    )
}