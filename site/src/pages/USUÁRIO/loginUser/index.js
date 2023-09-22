import { Link } from 'react-router-dom'
import './index.scss'


export default function LoginUser() {

  return (

    <div className="principal">

      <div className='subprincipal'>
        <img className='imgtoth' src='/assets/images/Group 1.svg'></img>
        <input className='barra1' type='text' placeholder="EMAIL"></input>
        <input className='barra2' type='password' placeholder="SENHA"></input>
        <button className='logar'>Logar</button>
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