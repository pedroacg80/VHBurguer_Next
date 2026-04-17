import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer id={styles.footer}>
            <div className={`${styles.container} layout_guide`}>
                <div id={styles.informacao}>
                <img src="../imgs/Logo_footer.svg" alt="Logo do VH" />
                <nav id={styles.nav_footer}>
                    <a href=""><img src="../imgs/tiktok.png" alt="Logo da rede social TikTok" /></a>
                    <a href=""><img src="../imgs/face.png" alt="Logo da rede social Facebook" /></a>
                    <a href=""><img src="../imgs/insta.png" alt="Logo da rede social Instagram " /></a>
                    <a href=""><img src="../imgs/youtube.png" alt="Logo do Youtube" /></a>
                </nav>
                </div>
            <hr id={styles.linha_footer}/>
            <p id={styles.copyright_footer}>Copyright © 2025 VH Burguer | Todos os direitos reservados</p>
            </div>
        </footer>
    )
}

export default Footer;