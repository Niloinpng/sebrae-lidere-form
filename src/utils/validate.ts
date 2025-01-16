import { Infos } from "../types/Infos";

type Error = {
    [key: string]: string;
}

export const validate = (data: Infos) => {
     
    const erros: Error = {};

    if(!data.nome){
        erros["nome"] = "Preencha seu nome completo";
    }

    if(!data.cpf){
        erros["cpf"] = "Informe seu CPF";
    }

    if(!data.email){
        erros["email"] = "Campo não preenchido corretamente";
    }

    if(!data.celular){
        erros["celular"] = "Campo não preenchido corretamente";
    }

    if(!data.estado){
        erros["estado"] = "Selecione um estado";
    }

    if(!data.cidade){
        erros["cidade"] = "Informe sua cidade";
    }

    if(!data.aceito){
        erros["aceito"] = "Aceite os termos";
    }

    return erros;
} 