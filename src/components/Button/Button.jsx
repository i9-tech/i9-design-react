import './Button.css'

export function Button({ menuVisivel, mudarOpcao }) {
    return (
        <>
        <button id="header" onClick={mudarOpcao}>{menuVisivel ? 'Esconder Menu' : 'Mostrar Menu'}</button>
        </>
    )
}