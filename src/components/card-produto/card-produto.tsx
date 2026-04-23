import styles from "./card-produto.module.css"
const CardProduto = () => {
    return(
        <article>
            <img className={styles.img_produto} src="../imgs/HamburguerAlcatraComBacon_1-scaled 1.png" alt="" />
            <h3 id={styles.titulo_card}>Monster</h3>
            <p>Hambúrguer brutal, suculento e exageradamente saboroso.</p>
            <div>
                <button></button>
                <button></button>
                <button></button>
            </div>
        </article>
    )
}

export default CardProduto;