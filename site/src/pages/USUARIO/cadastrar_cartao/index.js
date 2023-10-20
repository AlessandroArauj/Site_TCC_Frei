import './index.scss'


export default function CadastrarCartao() {

    return (
        <div className='page-add-cartao'>


            <div className='card'>

                <div className='titulo'>
                    <h1 className='sair'>x</h1>
                    <h1 className='forma'>Cadastrar Cartão</h1>
                    <div className='linha'></div>
                </div>

                <div className='subcard'>

                    <div className='info'>
                        
                        <div className='container'>
                            <input type='text' placeholder='Numero do Cartão' />
                            <input type='text' placeholder='Validade' />


                        </div>


                        <div className='container'>

                            <input type='text' placeholder='Nome do titular' />


                        </div>


                        <div className='container'>

                            <input ctype='text' placeholder='CVV' />
                            <input type='text' placeholder='CPF' />


                        </div>


                    </div>









                </div>

            </div>



        </div>


    )


}