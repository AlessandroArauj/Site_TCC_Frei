import './index.scss'


export default function conteudoOptions() {




    return (
        <div className='conteudoOption'>



            <section className='editarPerfil' id='editarPerfil'>



                <div className='inputs'>
                    <div>
                        <h1> Dados cadastrais</h1>
                        <div />
                        <input type='text' placeholder=' NOME' />
                        <input type='text' placeholder=' DATA NASCM' />
                        <input type='text' placeholder=' ENDEREÇO' />
                        <input type='text' placeholder=' TELEFONE' />
                        <input type='text' placeholder=' CPF' />
                        <input type='text' placeholder=' CIDADE' />
                    </div>
                    <div>
                        <h1> Alterar dados</h1>
                        <div />
                        <input type='text' placeholder=' NOME' />
                        <input type='text' placeholder=' DATA NASCM' />
                        <input type='text' placeholder=' ENDEREÇO' />
                        <input type='text' placeholder=' TELEFONE' />
                        <input type='text' placeholder=' CPF' />
                        <input type='text' placeholder=' CIDADE' />
                    </div>
                </div>


                <button > SALVAR ALTERAÇÕES</button>
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

                        <div/>
                        <p>ou</p>
                        <div />
                    </div>


                    <button className='bot'>Excluir conta</button>
                </div>

            </section>



            <script src='./script.js' />
        </div>
    )
}