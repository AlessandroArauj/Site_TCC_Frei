import './index.scss'


export default function progresso(){


    return(
        <div className='progresso'>
            <div className='titulo'>
                <h1> Progresso do produto</h1>
            </div>

            <div className='meio'>
                <img src='../../assets/images/guitarlandin.png'></img>
                <p>Seu código de verificação é 84593.
                    Para receber esta entrega ,informe o código Para o entregador pessoalmente,
                    nunca por telefone. <b>Saiba Mais</b>
                </p>
            </div>
            <img src='../../assets/images/barra.png'></img>

            <div>
                <button>Atualizar instruções de entrega do produto</button>
                <button>Cancelar esta entrega</button>
            </div>
        </div>
    )
}