import { Link } from "react-router-dom";
import './index.scss'

export default function Rodape() {
return(
    <div className="comp_rodape">
        <div className="roda">
            <div className="esq">
                <Link> <h1>Sobre a empresa</h1></Link>
                <Link> <h1>Ajuda e atendimentos</h1></Link>
                <h1> Contatos para contratos</h1>
                <div className='contato'>
                    <Link><img src="https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icon-download-png-and-vector-1.png" /></Link>
                    <Link><img src="../../../assets/images/zap.png" /></Link>
                    <Link><img src="../../../assets/images/inst.png" /></Link>
                </div>
            </div>

            <div className="line" />

            <div className="dir">
                <Link><img src='../../../assets/images/logo.svg' className="logo"/></Link>
                <h1> Siga-nos</h1>
                <div className="sociais">
                <Link><img src="https://www.freepnglogos.com/uploads/tik-tok-logo-png/tik-tok-tiktok-logo-glitch-toedit-sticker-fly-wall-7.png" /></Link>
                <Link><img src="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png" /></Link>
                <Link><img src="../../../assets/images/inst.png" /></Link>
                </div>
            </div>

        </div>
    </div>
    )
}