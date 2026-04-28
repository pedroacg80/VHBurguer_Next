import {api} from "./api";

export async function cadastrarCategoria(nome: string) {
    try{
        await api.post("Categoria", {nome});
        console.log("Deu certo");
    }catch(error: any){
        throw new Error("Erro ao cadastrar categoria");
    }
}