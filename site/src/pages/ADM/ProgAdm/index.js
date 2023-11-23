import './index.scss'
import Header from '../../../components/cabecalho'
import Rodape from '../../../components/rodape'
import { useNavigate, useParams, } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BuscarImagem, ListarProdutosPorID } from '../../../api/produtoApi';
import { StatusAlterar } from '../../../api/pedidosApi';


export default function Progresso() {

    const [produtos, setProdutos] = useState({});
    const ido = useParams().id1;
    const id = useParams().id2;
    const idp = useParams().id3

    const navigate = useNavigate();

    const [progresso, setProgresso] = useState('')
    const [statusId, setStatusId] = useState(0)



    async function AlterarStatus() {
        try {
            await StatusAlterar(statusId, id)
            navigate('/pageAdm')

        } catch (err) {
            console.log(err.message);
        }

    }



    useEffect(() => {
        ProgreBarra()
    }, [])



    function ProgreBarra() {

        if (ido == 1) {
            setProgresso('one')
        }

        else if (ido == 2) {
            setProgresso('two')

        }

        else if (ido == 3) {
            setProgresso('three')
        }

        else if (ido == 4) {
            setProgresso('four')
        }
    }

    return (


        <div className='ProdProgreAdm'>


            <div className='pr'>

                <div className='cardProgre'>

                    <div className=' bolinhas'>
                        <div>
                            <div></div>
                            <p> enviando chamado</p>
                        </div>
                        <div className='lineHori' />
                        <div>
                            <div> </div>
                            <p> pedido em andamento</p>
                        </div>
                        <div className='lineHori' />

                        <div>
                            <div> </div>
                            <p> pedido a caminho</p>
                        </div>
                        <div className='lineHori' />

                        <div>
                            <div></div>
                            <p>  pedido finalizado</p>
                        </div>
                    </div>

                    <div className='barra'>
                        <div className='esboco'>
                            <div className={progresso}>

                            </div>
                        </div>
                    </div>

                    <div className='MudarStatus'>

                        <select className='SelectStatus' value={statusId} onChange={e => setStatusId(e.target.value)}>

                            <option value={0}>Selecione</option>
                            <option value={1}>Aguardando aprovação</option>
                            <option value={2}>Em preparação</option>
                            <option value={3}>A caminho</option>
                            <option value={4}>Entregue</option>

                        </select>

                        <button className='butt-status' onClick={AlterarStatus}> Confirmar Alteração </button>

                    </div>



                </div>
            </div>

        </div>
    )
}