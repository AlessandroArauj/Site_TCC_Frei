import './index.scss'


export default function cardProduto(props) {

//fique feliz, ainda tenho coisa pra adicionar no card do produto, mas acho q da pra tu colocar suas api
    const carousel = props.addcarousel

    return (
        <div className='cardProduto'>

            <div className='container'>
                <div className='carousel' ref={carousel}>

                    <div className='card'>

                        <div className='cima'>
                            <div className='img-prod' />
                            <div className='line-prod' />
                        </div>

                        <div className='baixo'>
                            <p>Violão Jumbo Yamaha Cpx sla oq, eletrico com cordas de aço</p>
                            <h1> R$ 2 real e um pão</h1>
                        </div>

                    </div>

                </div>

                <div>


                </div>
            </div>


        </div>
    )
}