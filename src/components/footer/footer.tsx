import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer id={styles.footer}>
            <div className={`${styles.container} layout_guide`}>
                <div id={styles.informacao}>
                <img src="../imgs/Logo_footer.svg" alt="" />
                <nav id={styles.nav_footer}>
                    <a href=""><img src="../imgs/tiktok.png" alt="" /></a>
                    <a href=""><img src="../imgs/face.png" alt="" /></a>
                    <a href=""><img src="../imgs/insta.png" alt="" /></a>
                    <a href=""><img src="../imgs/youtube.png" alt="" /></a>
                </nav>
                </div>
            <hr id={styles.linha_footer}/>
            <p id={styles.copyright_footer}>Copyright © 2025 VH Burguer | Todos os direitos reservados</p>
            </div>
        </footer>
    )
}

export default Footer;