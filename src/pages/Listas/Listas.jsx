import './Listas.css';
import { Cabecalho } from './Cabecalho/Cabecalho';
import { Corpo } from './Corpo/Corpo';


export function Listas () {
    return (
        <>
        <section className='secao4 secao'>
            <table>
            <Cabecalho/>
            <Corpo/>
            </table>
        </section>
        </>
    )
}