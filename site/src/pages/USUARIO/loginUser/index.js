import { Link, useNavigate } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import axios from 'axios';


export default function LoginUser() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  
  
  async function LoginUsuarioReact(){

    let user = {
      EMAIL: email,
      SENHA: senha

    }

    try {
      
      const resposta = await axios.post('http://localhost:5000/cliente/login', user);

      if ( email != '' && senha != ''){
          navigate('/home');
      }

      else if (email === undefined || senha === undefined){
        setErro('Preenhca os campos obrigatórios')

      }
    } catch (err) {
      alert('⚠ Erro ao verificar as credenciais:', err);
        setErro('⚠ Login ou senha incorretos');
    }
  }

  return (

    <div className="principal">

      <div className='subprincipal'>

        
        <Link to={'/home'}>

        <img className='imgtoth' src='/assets/images/Group 1.svg'></img>

        </Link>


        <input className='barra1' type='text' placeholder=" EMAIL " value={email} onChange={e => setEmail(e.target.value)}></input>
        <input className='barra2' type='password' placeholder=" SENHA " value={senha} onChange={e => setSenha(e.target.value)}></input>
        <button className='logar' onClick={LoginUsuarioReact}>Logar</button>
        <a href='https://i.pinimg.com/564x/fd/4f/f3/fd4ff31c42c79d2442d4fc3ce7eb029a.jpg' className='esqueceu' >ESQUECEU A SENHA?</a>


        <div className='comp'>
          <div className='linha'></div>
          <p className='ou'>ou</p>
          <div className='linha'></div>
        </div>

        <Link className='criar' to={'/cadastroUser'}>
          CADASTRAR
        </Link>
      </div>



      <div className='compmeio'>
        <div className='linhameio'></div>
        <a className='imgmeio'>
          <img src='/assets/images/Rectangle 5.png'></img>
        </a>
        <div className='linhameio'></div>
      </div>

      <div className='subprincipalimg'>
        <img src='/assets/images/Rectangle 4.svg'></img>
      </div>




    </div>
  )
}