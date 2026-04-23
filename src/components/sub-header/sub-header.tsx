import Link from "next/link"
import styles from "./sub-header.module.css"

const SubHeader = () => {
    return (
        <header id={styles.header}>
            <div className={`${styles.container} layout_guide`}>
                <img src="../imgs/Logo_footer.svg" alt="" />
                <Link href="/home" id={styles.voltar_btn}>Voltar</Link>
            </div>
        </header>
    )
}

export default SubHeader;