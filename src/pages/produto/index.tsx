import SubHeader from "@/components/sub-header/sub-header";
import Footer from "@/components/footer/footer";
import styles from "./produto.module.css"
const Produto = () => {
    return (
        <>
            <SubHeader />
                <main id={styles.main}>
                    <h1>Criar Produto</h1>
                    <div id={styles.nome_produto} className={styles.campo}>
                        <label htmlFor="">Nome do produto</label>
                        <input type="text"  />
                    </div>
                    <div id={styles.descricao} className={styles.campo}>
                        <label htmlFor="">Descricao</label>
                        <input type="text" />
                    </div>
                    <div id={styles.preco} className={styles.campo}>
                        <label htmlFor="">Preco(R$)</label>
                        <input type="text" />
                    </div>
                    <div id={styles.categoria} className={styles.campo}> 
                        <label htmlFor="">Categoria</label>
                        <input type="text" />
                    </div>
                    <button>Adicionar categoria</button>
                    <div id={styles.imagem} className={styles.campo}>
                        <label htmlFor="">URL da imagem</label>
                        <input type="text" />
                    </div>
                    <div id="botoes">
                        <button>Adicionar Promocao</button>
                        <button>Salvar</button>
                    </div>
                </main>
            <Footer />
        </>
    )
}

export default Produto;