import './DadosCorpo.css';
import { BotoesCorpo } from '../BotoesCorpo/BotoesCorpo';
import { ImagemCorpo } from '../ImagemCorpo/ImagemCorpo';

export function DadosCorpo() {
    return(
        <>
        <td className="item"><span>01123</span></td>
        <ImagemCorpo/>
        <td className="item"><span>Arroz</span></td>
        <td className="item"><span>12/07/2025</span></td>
        <td className="item"><span>R$ 10,00</span></td>
        <td className="item"><span>R$ 20,00</span></td>
        <td className="item"><span>15</span></td>
        <td className="item"><span>03/03/2025</span></td>
        <td className="item"><span>Arroz Branco de Cozinha 5kg</span></td>
        <BotoesCorpo/>
        </>
    )
}