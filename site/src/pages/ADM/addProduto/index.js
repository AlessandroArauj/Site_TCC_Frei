import { Link } from 'react-router-dom'
import './index.scss'




export default function addProduto() {

    return (


        <div className="addProduto">
            <h1>Insira ou Edite o Produto</h1>
            <Link> Voltar p/ Home</Link>

            <div className='f1'>

                <div className='left'>
                    <div className='start-left'>
                        <div className='lado'>
                            <div />
                        </div>
                        <div className='prin' />
                    </div>

                    <div className='end-left'>
                        <h1> Cores :</h1>
                        <div />
                    </div>
                </div>

                <div className='right'>

                    <div className='start-right'>
                        <input type='text' placeholder='Nome' />
                        <input type='text'  placeholder='Preço'/>
                    </div>

                    <div className='center-right'>
                        <label>
                            <input type='text' placeholder='Promoção' />
                            <select>
                                <option>Sim</option>
                                <option>Nao</option>
                            </select>


                        </label>

                        <input type='text' placeholder=' estoque'/>
                    </div>

                    <div className='end-right'>
                        <select>
                            <option> Marca</option>
                        </select>

                        <select>
                            <option> Destaque</option>
                        </select>

                        <select>
                            <option> Disponivel</option>
                        </select>
                    </div>

                </div>


            </div>


            <button> Adicionar produto</button>
        </div>
    )

}