import { Link, useNavigate } from 'react-router-dom'
import storage from 'local-storage'
import './index.scss'
import LoadinBar from 'react-top-loading-bar'
import { useState, useRef, useEffect } from 'react'
import { login } from '../../../api/loginUserApi'


export default function LoginUsuario() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [carregando, setCarregando] = useState(false)


  const navigate = useNavigate();
  const ref = useRef()




  useEffect(() => {
      if (storage('usuario-logado')){
        navigate('/perfilusuario')
      }
  }, [])



  async function LoginUsuarioReact() {
    ref.current.continuousStart();
    setCarregando(true);

    try {
      const r = await login(email, senha); 
      storage('usuario-logado', r)

      setTimeout(() => {
      navigate('/home')
      }, 3000)
      


    }

    catch (err) {
      ref.current.complete();
      setCarregando(false)
      if (err.response.status === 400) {
        setErro(err.response.data.erro)
      }
    }

  }

  return (

    <div className="principal">
      <LoadinBar className='barradeloading' color='#12adf9' ref={ref} />

      <div className='subprincipal'>


        <Link to={'/home'}>

          <img className='imgtoth' src='/assets/images/Group 1.svg'></img>

        </Link>


        <input className='barra' type='email' placeholder=" EMAIL " value={email} onChange={e => setEmail(e.target.value)}></input>
        <input className='barra' type={mostrarSenha ? 'text' : 'password'} placeholder=" SENHA " value={senha} onChange={e => setSenha(e.target.value)}></input>
        <button onClick={() => setMostrarSenha(!mostrarSenha)}> FUTURO OLHO </button>
        <div className='form-entrar invalido'>

          {erro}

        </div>

        <button className='logar' onClick={LoginUsuarioReact} disabled={carregando}>Logar</button>




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