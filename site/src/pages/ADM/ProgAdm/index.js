import './index.scss'


export default function prog(){


    return(
        <div className='progresso'>
            <div className='titulo'>
                <h1> Esse é o progresso do produto</h1>
            </div>

            <div className='meio'>
                <img src='../../assets/images/guitarlandin2.png'></img>
                <p>O produto chegará ao cliente às duas da tarde do dia vinte desse mês, daqui no maximo 5 dias
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