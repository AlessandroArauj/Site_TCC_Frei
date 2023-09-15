import './index.scss'

export default function cadastroAdm() {
    return (
        <div className="prin">


            <div className="esq">
                <h1> Cadastrar-se </h1>
                <div className="line" />

                <div className="insercao">

                    <div>
                        <h1>Email</h1>
                        <input type="text" />

                        <h1>Senha</h1>
                        <input type="text" />
                    </div>
                    
                    <h1>
                        Solicitar nova senha
                    </h1>

                    <button>
                        Entrar
                    </button>
                </div>

            </div>



            <div className='dir'>
                <img src='../../../assets/images/logo.svg' />
            </div>

        </div>
    )
}