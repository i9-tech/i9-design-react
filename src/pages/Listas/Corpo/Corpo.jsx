import './corpo.css';
import { DadosCorpo } from './DadosCorpo/DadosCorpo';

export function Corpo() {
    return (
        <>
        <tr className='lista-item'>
            <DadosCorpo/>
        </tr>
        <tr className='lista-item item2'>
            <DadosCorpo/>
        </tr>
        </>
    )
}