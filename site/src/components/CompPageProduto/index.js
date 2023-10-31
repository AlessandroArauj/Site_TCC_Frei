import CompCartao from '../compCartao'
import './index.scss'



export default function CompProduto() {


    function abrirModal1() {
        const editar = document.getElementById('Modal1')
        editar.classList.add('abrir')

    }



    function Descricao() {
        const Modal1 = document.getElementById('desc')
        Modal1.classList.add('maior')
    }





    return (
        <div className='CompProduto'>
            <CompCartao />
            <section className='CompProd-f1'>

                <div className='Card'>
                    <div className='Esq'>

                        <div className='Cima-Esq'>
                            <div className='ladoImg'>

                            </div>

                            <div className='ImgPrincipal'>
                                <img />
                            </div>

                            <div className='DesqProd'>
                                <p> Guitarra eeltrica e os carai a quatro</p>
                                <h1>Preço </h1>

                                <div>
                                    <p>Tipos de pagamentos aceitos</p>
                                    <img src='../../../assets/images/Pix.svg' />
                                    <img src='../../../assets/images/Visa.svg' />
                                    <img src='../../../assets/images/Santa.png' />
                                    <img src='../../../assets/images/HipercCard.svg' />
                                    <img src='../../../assets/images/MasterCard.svg' />
                                    <img src='../../../assets/images/Elo.svg' />
                                    <img src='../../../assets/images/itau.png' />
                                </div>

                            </div>
                        </div>


                        <div className='Meio-Esq'>
                            <button>Canhoto</button>
                            <button>Destro</button>

                        </div>

                        <div className='Fim-Esq'>

                        </div>

                    </div>

                    <div className='Dir'>
                        <div className='Cubo-dir'>

                        </div>
                        <div className='Cubo-dir'>
                            <p>Produto disponivel</p>

                            <p>Quantidade de estoque</p>

                        </div>

                        <button className='button1' onClick={abrirModal1}> Forma de pagamento</button>
                        <button className='button2' > Adicionar ao carrinho</button>

                        <div className='baixo-dir'>
                            <h2>Produto Testado e aprovado pela maioria dos compradores.</h2>

                            <h1>Devolução gratis:</h1>

                            <p>Em caso do produto aparecer danificado entrar em contato conosco até 7 dias pós a entrega do produto</p>


                        </div>
                    </div>
                </div>
            </section>



            <section className='CompProd-f2'>

                <div className='infoPro' id='desc'>
                    <div className='cima'>
                        <h1>INFORMAÇÕES DO PRODUTO</h1>
                        <button onClick={Descricao}>nsei</button>
                    </div>
                    <div className='baixo'>
                        <h1> esse procuto e pica demais e3u sei do q eu to falndo pq eu toco muito nas madrugadas que tem, alem de eu fazer bastante pragrama, PROGRAMO MUITOYasfsafsdaf asdfa asf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as
                        asf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg g
                        asf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg gasf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg gasf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg gasf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg g sadf sadf fs sdf sdf wsfggsg fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg g
                        asf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg gasf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg gasf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg gasf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg g sadf sadf fs sdf sdf wsfggsg fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg g
                        asf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg gasf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg gasf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg gasf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg g sadf sadf fs sdf sdf wsfggsg fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg g
                        asf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg gasf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg gasf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg gasf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg g sadf sadf fs sdf sdf wsfggsg fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg g
                        asf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg gasf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg gasf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg gasf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg g sadf sadf fs sdf sdf wsfggsg fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg g
                        asf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg gasf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg gasf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg gasf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg g sadf sadf fs sdf sdf wsfggsg fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg g
                        asf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg gasf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg gasf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg gasf asfsadf aasf asfrafas asfd aasf assadfasd fasfasd asdfasd sadfasf saf asdf sadf as saf assaf assaf as fas asdf sad fasf a fasdf asf as asdf asd asdf as fas fasd fasd fsadf sadf asd fsad asd fs dfsaf as sadf sadf fs sdf sdf wsfggsg g sadf sadf fs sdf sdf wsfggsg g</h1>
                    </div>

                </div>

                <div className='comen'>
                    <h1>AVALIAÇÕES DOS CLIENTES</h1>
                </div>


                <div className='faixa-5'>
                    <div className='cima-f5'>
                        <div className='line' />
                        <h1> Com os menores preços</h1>
                        <div className='line2' />
                    </div>


                    <div>

                    </div>
                </div>




            </section>





        </div>
    )
}