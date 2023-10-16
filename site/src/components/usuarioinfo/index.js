import './index.scss'


export default function conteudoOptions(){


    

    return(
        <div className='conteudoOption'>



            <section className='editarPerfil'  id='editarPerfil'>
                <h1> Dados Cadastrais</h1>
                <div className='line' />

                <div className='inputs'>
                    <div>
                        <input type='text' placeholder=' NOME'/>
                        <input type='text' placeholder=' DATA NASCM'/>
                        <input type='text' placeholder=' ENDEREÇO'/>
                    </div>
                    
                    <div>
                        <input type='text' placeholder=' TELEFONE'/>
                        <input type='text' placeholder=' CPF'/>
                        <input type='text' placeholder=' CIDADE'/>
                    </div>
                </div>


                <button > SALVAR ALTERAÇÕES</button>
            </section>

//////////////////////////////////////////////////////////////////////////////////////////////

            <section className='senhaSeguranca' id='senhaSeguranca'>

                <div>
                    <div className='senhas'>
                        <input type='text' placeholder='Senha atual'/>
                        <input type='text' placeholder='Nova senha'/>
                        <input type='text' placeholder='confirmar'/>
                    </div>


                    <h1>Excluir conta</h1>
                </div> 

            </section>


////////////////////////////////////////////////////////////////////////////////////////////////
        
                <script src='./script.js'/>
        </div>
    )
}