import { BuscarImagem } from '../../api/produtoApi'
import CompCartao from '../compCartao'
import './index.scss'



export default function CompProduto(props) {


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

                            <div className='ImgPrincipal'>
                                <img src={BuscarImagem(props.produtos.img)} />

                            </div>



                        </div>


                    </div>

                    <div className='Dir'>
                        <div>
                            <div className='Cubo-dir'>
                                <p> {props.produtos.PRODUTO} </p>
                                {props.produtos.PRECOPROMO ? (
                                    <h1>{props.produtos.PRECOPROMO}</h1>
                                ) : (
                                    <h1>{props.produtos.PRECO}</h1>
                                )}

                            </div>
                            

                            <div className='Cubo-dir'>
                                <p>Produto disponivel</p>

                                <p>Quantidade de estoque</p>

                            </div>

                        </div>

                        <div>
                            <button className='button1' onClick={abrirModal1}> Forma de pagamento</button>
                            <button className='button2' > Adicionar ao carrinho</button>
                        </div>


                        <div className='Desq-Prod'>
                            <div className='bancos'>
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