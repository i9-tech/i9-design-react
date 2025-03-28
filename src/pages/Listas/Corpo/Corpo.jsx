import './corpo.css';
import { DadosCorpo } from './DadosCorpo/DadosCorpo';

export function Corpo() {
    return (
        <>
        <tr className='lista-item'>
            <DadosCorpo/>
        </tr>
        </>
    )
}