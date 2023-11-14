import { useNavigate } from 'react-router-dom';
import './index.scss'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useRef, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { loginAdm } from '../../../api/loginAdmApi';
import storage from 'local-storage'



export default function CadastroAdm() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [carregando, setCarregando] = useState(false)


    const navigate = useNavigate();
    const ref = useRef()

    function verificaEmail(email) {
        const padrao = /^\S+@\S+\.\S+$/;
        return padrao.test(email);
      }
    
      async function LoginADMReact() {
        ref.current.continuousStart();
        setCarregando(true);
    
        try {
          if (!verificaEmail(email)) {
            toast.error('Por favor, insira um endereço de e-mail válido.');
            ref.current.complete();
            setCarregando(false);
            return;
          }
    
          const r = await loginAdm(email, senha);
          storage('admin-logado', r);
    
          setTimeout(() => {
            navigate('/pageAdm');
          }, 3000);
        } catch (err) {
          ref.current.complete();
          setCarregando(false);
    
          if (err.response && err.response.status === 400) {
            setErro(err.response.data.erro);
            toast.error(erro);
          }
        }
      }
    


    useEffect(() => {
        if (storage('admin-logado')) {
            navigate('/pageAdm')
        }
    }, [])


    return (
        <div className='prin'>
              <LoadingBar className='barradeloading' color='#12adf9' ref={ref} />
              <ToastContainer />

            <div className='win'>
                <form action='' />
                <h2>LOGIN</h2>
                <div className='inputbox'>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} required />
                    <label for="">EMAIL</label>
                </div>
                <div className='inputbox'>
                    <input type='password'  value={senha} onChange={e => setSenha(e.target.value)} required />
                    <label for="">SENHA</label>
                </div>
                <button type='submit' onClick={LoginADMReact} disabled= {carregando}>Login</button>
            </div>
        </div>
    )
}