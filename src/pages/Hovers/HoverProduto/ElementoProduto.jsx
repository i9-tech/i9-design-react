import './ElementoProduto.css'

export function ElementoProduto(props) {
    return (
        <>
            <div className="botao-elemento-produto">
                <div className="info-produto">
                    <h2 id='titulo-produto'>Produto</h2>
                    <span id='descricao'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</span>
                    <span id="valor-total">R$ 00,00 </span>
                </div>
                <img src="./image.png" alt="Imagem do Pastel" />
                <button class="add">+</button>
            </div>
        </>
    )
}

export default ElementoProduto