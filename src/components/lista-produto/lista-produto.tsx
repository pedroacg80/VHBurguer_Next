import Link from "next/link";
import CardProduto from "../card-produto/card-produto";
import styles from "./lista-produto.module.css";
import { useEffect, useState } from "react";
import { listarProduto } from "@/pages/api/produtoService";

interface Produto {
    ProdutoID: number,
    nome: string,
    preco: number
    descricao: string,
    imagemUrl: string,
}

const ListaProduto = () => {

    const [produtos, setProdutos] = useState<Produto[]>([]);

    async function listar() {
        try {
            const lista = await listarProduto();
            setProdutos(lista);
        } catch (error: any) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        listar();
    })


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
                {produtos.length > 0 ? produtos.map((item) => (
                    <CardProduto
                        key={item.ProdutoID}
                        ProdutoID={item.ProdutoID}
                        titulo={item.nome}
                        descricao={item.descricao}
                        preco={item.preco}
                        imagem={item.imagemUrl}
                    />
                )) : (
                    <p>Carregando produto...</p>
                )}
            </div>
        </>

    )
}

export default ListaProduto;