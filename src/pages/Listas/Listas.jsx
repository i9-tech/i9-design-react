import './Listas.css';
import { Cabecalho } from './Cabecalho/Cabecalho';
import { Corpo } from './Corpo/Corpo';


export function Listas () {
    return (
        <>
        <section className='secao4 secao'>
            <table className='table-produtos'>
            <Cabecalho/>
            <Corpo/>
            </table>
            {/* <table className='table-funcionarios'>
            <Cabecalho/>
            <Corpo/>
            </table> */}
        </section>
        </>
    )
}