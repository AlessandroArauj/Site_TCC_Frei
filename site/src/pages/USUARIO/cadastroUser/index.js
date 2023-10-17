import { useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import { CadastroUsuarioReact } from '../../../api/loginUserApi';




export default function ContaUser() {

   const [nome, setNome] = useState('');
   const [data, setData] = useState('');
   const [tele, setTele] = useState('');
   const [endereco, setEndereco] = useState('');
   const [cpf, setCPF] = useState('');
   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');
   const [cidade, setCidade] = useState('');
   const [confirmaSenha, setConfirmar] = useState('');
   const [erroConfirma, setErroConfirma] = useState('');
   const [termosAceitos, setTermosAceitos] = useState(false);
   const [mostrarSenha, setMostrarSenha] = useState(false);

   async function Cadastrar() {
      try {

         if (!termosAceitos) {
            alert('Aceita os termos?');
            return;


            

         }

         if (senha !== confirmaSenha) {
            setErroConfirma('As senhas não coincidem.');
            return;
         }


         const r = await CadastroUsuarioReact(
            nome,
            data,
            tele,
            cpf,
            endereco,
            cidade,
            email,
            senha
         );

         alert('Usuário Cadastrado');
      } catch (err) {
         alert(err.message);
      }
   }






   return (
      <div className='criarConta'>

         <div className='cima'>
            
            <div className='legenda'>
               <h1 className='legenda'>Seja Bem Vindo</h1>
            </div>

         </div>


         <div className='baixo'>
            <div className='p1'>
               <p>PREENCHA COM SEUS DADOS PESSOAIS</p>
               <hr></hr>
            </div>

            <div className='p2'>
               <div className='container1'>

                  <input id='name' type='text' name='name' placeholder='Nome Completo' required value={nome} onChange={e => setNome(e.target.value)} />
                  <input id='name' type='date' name='name' required value={data} onChange={e => setData(e.target.value)} />
                  <input id='number' type='tel' name='number' placeholder='Telefone' required value={tele} onChange={e => setTele(e.target.value)} />
                  <div>

                     <input id='name' type='text' name='name' placeholder='Endereço' required value={endereco} onChange={e => setEndereco(e.target.value)} />
                     <input id='name' type='text' name='name' placeholder='CPF' required value={cpf} onChange={e => setCPF(e.target.value)} />
                     <input id='name' type='text' name='name' placeholder='Cidade' required value={cidade} onChange={e => setCidade(e.target.value)} />

                  </div>



               </div>

               <div className='container2'>
                  <input id='email' type='email' name='name' placeholder='Email' required value={email} onChange={e => setEmail(e.target.value)} />
                  <input id='password' type={mostrarSenha ? 'text' : 'password'} name='password' placeholder='Senha' required value={senha} onChange={e => setSenha(e.target.value)} />

                  <div className='confima-senha-div'>

                     <input id='password' type={mostrarSenha ? 'text' : 'password'} name='Confirmpassword' placeholder='Confirme Sua Senha' required value={confirmaSenha} onChange={e => setConfirmar(e.target.value)} />
                     <p className='mensagem-erro-senha'> {erroConfirma} </p>

                  </div>

                  <button onClick={() => setMostrarSenha(!mostrarSenha)}> FUTURO OLHO </button>

               </div>


            </div>


            <div className='right'>
               <button onClick={Cadastrar}>Cadastrar</button>
               <Link className='Link-cad-voltar' to={'/loginUser'}> Voltar Login </Link>

               <div className='final'>
                  
                  <input type="checkbox" id="aceitarTermos" checked={termosAceitos} onChange={() => setTermosAceitos(!termosAceitos)}/>
                  <label htmlFor="aceitarTermos">Aceitar os Termos e Condições</label>
               </div>
            </div>



         </div>

      </div>

   )

}