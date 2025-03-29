import { Cabecalho } from './Cabecalho/Cabecalho';
import { Corpo } from './Corpo/Corpo';

export function Tabela({tipoLista}) {
    return tipoLista === 'Estoque' ?(
        <table className='table-produtos'>
        <Cabecalho tipoLista='Estoque'/>
        <Corpo tipoLista='Estoque'/>
        </table>    
    ) : (
        <>
        <table className='table-funcionarios'>
        <Cabecalho tipoLista='Funcionario'/>
        <Corpo tipoLista='Funcionario'/>
        </table>
        </>
    )
}