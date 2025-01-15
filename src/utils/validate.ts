import { Infos } from "../types/Infos";

type Error = {
    [key: string]: string;
}

export const validate = (data: Infos) => {
     
    const erros: Error = {};

    if(!data.nome){
        erros["nome"] = "Campo obrigatório";
    }

    return erros;
} 