import styles from "./categoria.module.css"
import Footer from "@/components/footer/footer";
import { useState } from "react";
import { cadastrarCategoria } from "../api/categoriaService";
import Sub_Header from "@/components/sub-header/sub-header";
import { ToastContainer, toast } from 'react-toastify';


const Categoria = () => {

    const [categoria, setCategoria] = useState<string>("");
    const notificacao = (msg: string) => toast(msg);
    const erro = (msg: string) => toast.error(msg);

    async function cadastrar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try{
            await cadastrarCategoria(categoria);
            notificacao("Categoria cadastrada!")
        }
        catch(error: any) {
            erro(error.message);
        }
    }

    return (
        <>
            <ToastContainer/>
            <Sub_Header />
            <main id={styles.main}>
                <h1>CRIAR CATEGORIA</h1>
                <form id={styles.form_container} onSubmit={cadastrar}>
                    <div className={styles.div_agrupar}>
                        <span>Nome da Categoria</span>
                        <input type="text" placeholder="Digite a categoria"
                            value={categoria} onChange={(e) => setCategoria(e.target.value)} />
                    </div>

                    <div id={styles.botoes}>
                        <button id={styles.btn_salvar} type="submit">Salvar</button>
                        <button id={styles.btn_cancelar}>Cancelar</button>
                    </div>
                </form>
            </main>
            <Footer />
        </>

    )
}

export default Categoria;