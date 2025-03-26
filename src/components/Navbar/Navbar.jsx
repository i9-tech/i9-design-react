import './Navbar.css'
import { Options } from '../Options/Options'


export function Navbar({ menuVisivel, scnAtual, atualizarCategoria }) {
    return (
        <>
        {console.log(scnAtual)}
        <header className='cabecalho' style={{display: menuVisivel ? 'flex' : 'none'}}>
            <div className='titulo'>
                <h1>
                    COMPONENTES DE ESTILIZAÇÃO i9
                </h1>
            </div>
            <div className="options">
                <h2 id="scnAtual">
                    {scnAtual ? (
                        <>Categoria selecionada: <b style={{color: 'darkred'}}> {scnAtual}</b></>
                    ) : 'Selecione uma categoria:'}
                </h2>
                <Options atualizarCategoria={atualizarCategoria} />
            </div>
        </header>
        </>
    )
}