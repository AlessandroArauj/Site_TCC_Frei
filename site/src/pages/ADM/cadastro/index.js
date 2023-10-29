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

    async function LoginADMReact() {
        ref.current.continuousStart();
        setCarregando(true);

        try {
            const r = await loginAdm(email, senha);
            storage('admin-logado', r)

            setTimeout(() => {
                navigate('/pageAdm')
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


    useEffect(() => {
        if (storage('admin-logado')) {
            navigate('/pageAdm')
        }
    }, [])


    return (
        <div className='prin'>
              <LoadingBar className='barradeloading' color='#12adf9' ref={ref} />

            <div className='win'>
                <form action='' />
                <h2>login</h2>
                <div className='inputbox'>
                    <span className='icon'></span>
                    <input type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div className='inputbox'>
                    <span className='icon'></span>
                    <input type='password' placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} required />
                </div>
                <button type='submit' onClick={LoginADMReact} disabled= {carregando}>Login</button>
            </div>
        </div>
    )
}