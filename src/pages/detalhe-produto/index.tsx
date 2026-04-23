import SubHeader from "@/components/sub-header/sub-header"
import styles from "./detalhe-produto.module.css"
import Footer from "@/components/footer/footer"
const DetalheProduto = () => {
    return (
        <>
            <SubHeader />
            <main id={styles.main}>
                <div id={styles.detalhe_produto}>
                    <div className={styles.area_edicao}>
                        <h1>DETALHES DO X-BACON</h1>
                        <img src="../imgs/HamburguerAlcatraComBacon_1-scaled 1.png" alt="" />
                        <div className={styles.informacoes_produto}>
                            <div id={styles.lado_esquerdo}>
                                <h2>Descricao</h2>
                                <p>OJFAIOFNAUOFAUIFAIUFOBAIUFOBAUIFABFUI</p>
                            </div>
                            <div id={styles.lado_direito}>
                                <div id={styles.preco}>
                                    <h2>Preco</h2>
                                    <p>VLAORAORKAO</p>
                                </div>
                                <div id={styles.categoria}>
                                    <h2>Categoria</h2>
                                    <p>aodiaod</p>
                                    <p>ianfdioanfio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default DetalheProduto;