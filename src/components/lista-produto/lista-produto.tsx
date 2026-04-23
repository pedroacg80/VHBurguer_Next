import Link from "next/link";
import CardProduto from "../card-produto/card-produto";
import styles from "./lista-produto.module.css";

const ListaProduto = () => {
    return (
        <>
            <div id={styles.botoes_cardapio}>
                <button id={styles.filtro}>Filtrar</button>
                <div id={styles.botoes_direita}>
                    <Link className={styles.botao} href="/promocoes">Promoções</Link>
                    <Link className={styles.botao} href="/produto">Adicionar produtos</Link>
                </div>
            </div>
            <div id={styles.cards_produtos}>
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            </div>
        </>
    
    )
}

export default ListaProduto;