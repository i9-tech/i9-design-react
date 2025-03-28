import './cabecalho.css';
import { DadosCabecalho } from './DadosCabecalho/DadosCabecalho';

export function Cabecalho() {
    return(
        <>
        <tr className='header'>
            <DadosCabecalho/>
        </tr>
        </>
    )
}