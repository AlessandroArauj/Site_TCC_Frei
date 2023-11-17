import './index.scss'
import { ToastContainer, toast } from 'react-toastify';
import storage from 'local-storage';
import { useEffect, useState } from 'react';



export default function ConteudoOptions() {

    const [usuario ,setUsuario] = useState('');
    const [celular, setCelular] = useState('');
    const [endereco, setEndereco] = useState('');
    const [nasci, setNasci] = useState('');
    const [email, setEmail] = useState('');
    
 
    useEffect(() => {

        
    
        if (storage('usuario-logado')) {
            const usuariologado = storage('usuario-logado');
            setUsuario(usuariologado.nome);
            setCelular(usuariologado.Celular);
            setEndereco(usuariologado.Endereço);
            setNasci(usuariologado.Nascimento);
            setEmail(usuariologado.email);
        }
    }, [])


    


    return (
        <div className='conteudoOption'>



            <section className='editarPerfil abrir' id='editarPerfil'>



                <div className='inputs'>
                    <div>
                        <h1> Dados cadastrais</h1>
                        <div />
                        <p>{usuario}</p>
                        <p>{nasci.substr(0, 10)}</p>
                        <p>{endereco}</p>
                        <p>{celular}</p>
                        <p>{email}</p>
                        
                    </div>
                    <div>
                        <h1> Alterar dados</h1>
                        <div />
                        <input type='text' placeholder=' NOME' />
                        <input type='text' placeholder=' DATA NASCM' />
                        <input type='text' placeholder=' ENDEREÇO' />
                        <input type='text' placeholder=' TELEFONE' />
                        <input type='text' placeholder=' EMAIL' />
                        
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


            <section className='notificacao' id='notificacao'>
                <h1>deu booooom</h1>

            </section>



            <script src='./script.js' />
        </div>
    )
}