import Header from "@/components/header/header";
import Footer from "@/components/footer/footer"

import styles from "./home.module.css"

const Home = () => {
    // {`${styles.container} layout_guide`}
    return (
        <>
            <Header />
            <main id={styles.main}>
                <div id={`${styles.container} layout_guide`}>
                    <section id={`${styles.banner}`}>
                        <h1>BEM-VINDO AO VH BURGUER</h1>
                        <img src="../imgs/foto_de_hamburgueres.png" alt="" id={styles.imagem_banner} />
                        <div id={styles.botoes_banner}>
                            <button id={styles.btn_chamar}>Chamar atendente</button>
                            <button id={styles.btn_ver}>Ver cardápio</button>
                        </div>
                    </section>
                    <section id={styles.destaques}>
                        <div id={styles.lado_esquerdo}>
                            <p>Os queridinhos da galera</p>
                            <p>MAIS PEDIDOS</p>
                        </div>
                        <div id={styles.lado_direito}>
                            <div id={styles.imagem_bacon}>
                                <p>Lanche com</p>
                                <p>MUITO BACON</p>
                            </div>
                            <div id={styles.super_combos}>
                                <p>Se tiver muita fome</p>
                                <p>SUPER COMBOS</p>
                            </div>
                        </div>
                    </section>
                    <section id={styles.cardapio}>
                        <h1>Cardapios</h1>
                        {/* chamar componente de lista */}
                    </section>
                    <section id={styles.unidades}>
                        <h3>NOSSAS UNIDADES</h3>
                        <ul id={styles.lista_unidades}>
                            <li>Centro - Av. Aurora, 742</li>
                            <li>Jardim - Av. das Palmeiras, 1280</li>
                            <li>Norte - Av. Horizonte</li>
                            <li>Sul - Av. Nova Esperança, 910</li>
                        </ul>
                    </section>
                    <Footer />
                </div>
            </main>
        </>
    )
}

export default Home;
