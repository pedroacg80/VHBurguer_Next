import { formatarPreco } from "@/utils/formatacao";
import styles from "./card-produto.module.css"
import Link from "next/link";

type Produto = {
    titulo: string,
    descricao: string,
    preco: number,
    imagem: string,
    key: number
    ProdutoID: number
}

const CardProduto = ({ titulo, descricao, preco, imagem, key, ProdutoID}: Produto) => {
    return (
        <article className={styles.card_produto} key={key}>
            <Link href={"/detalhe-produto/" + ProdutoID}>
                <img src="{imagem}" alt="Produto vendido pela loja."
                    className={styles.img_produto} />
            </Link>
            <h3 className={styles.titulo_produto}>{titulo}</h3>
            <p className={styles.desc_produto}>{descricao}</p>
            <div className={styles.campo_itens}>
                <p className={styles.valor_produto}>{formatarPreco(preco)}</p>
                <button>
                    <img src="/imgs/trash.svg" alt="ícone que representa exclusão" />
                </button>
                <button>
                    <img src="/imgs/editar.svg" alt="ícone que representa edição" />
                </button>
            </div>
        </article>
    )
}

export default CardProduto;