import './index.scss'


export default function ContaUser(){
   return(
     <div className='criarConta'>

      <div className='cima'>
        <img src='../../../assets/images/Rectangle 10.svg' />
        <div className='legenda'>
        <h1>Seja Bem Vindo</h1>
      </div>

       </div>


        <div className='baixo'>
         <div className='p1'>
            <p>PREENCHA COM SEUS DADOS PESSOAIS</p>
            <hr></hr>
         </div>

         <div className='p2'>
            <div className='container1'>
               
               <input id='name' type='text' name='name' placeholder='Nome completo'required/>
               <input id='name' type='date' name='name' required/>
               <input id='number' type='tel' name='number' placeholder='Telefone'required/>
               <input id='name' type='text' name='name' placeholder='Endereço' required/>
               <input id='name' type='text' name='name' placeholder='CPF' required/>
               <input id='name' type='text' name='name' placeholder='Cidade' required/>
               
            </div>


         </div>

         <div className='p3'>     
            <div className='cont2'>
            <input id='email' type='email' name='name' placeholder='Email' required/>
            <input id='password' type='password' name='password' placeholder='Senha' required/>
          
            <input id='password' type='password' name='Confirmpassword' placeholder='Confirme sua senha' required/>
          


            </div>

          </div>

          <div className='right'>
            <button>Cadastrar</button>
            <div className='final'>
            <input type='radio'  required/>
            <label for="'Aceitar todos Os termos'">Aceitar os termos </label>
            </div>
         </div>



        </div>

     </div>

   )

}