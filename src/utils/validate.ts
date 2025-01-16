import { Infos } from "../types/Infos";

type Error = {
  [key: string]: string;
};

const invalidCPF: string[] = [
  "00000000000",
  "11111111111",
  "22222222222",
  "33333333333",
  "44444444444",
  "55555555555",
  "66666666666",
  "77777777777",
  "88888888888",
  "99999999999",
];

const isEmail = (str: string): boolean => {
  if (str.length <= 4) return false;
  const posArroba: number = str.indexOf("@");
  const posDot: number = str.lastIndexOf(".");
  return posArroba >= 0 && posDot > posArroba;
};

const isCPF = (strCPF: string): boolean => {
  strCPF = strCPF.replace(/[^\d]+/g, "");

  if (invalidCPF.indexOf(strCPF) >= 0) return false;

  let soma = 0;
  let resto: number;

  for (let i = 1; i <= 9; i++) {
    soma += parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  }

  resto = (soma * 10) % 11;
  resto = resto === 10 || resto === 11 ? 0 : resto;
  if (resto !== parseInt(strCPF.substring(9, 10))) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  }

  resto = (soma * 10) % 11;
  resto = resto === 10 || resto === 11 ? 0 : resto;
  if (resto !== parseInt(strCPF.substring(10, 11))) return false;

  return true;
};

const isCelular = (str: string): boolean => {
  str = str.replace(/[^\d]+/g, "");
  return str.length === 11;
};

export const validate = (data: Infos): Error => {
  const erros: Error = {};

  if (!data.nome) {
    erros["nome"] = "Preencha seu nome completo";
  }

  if (!data.cpf) {
    erros["cpf"] = "Informe seu CPF";
  } else if (!isCPF(data.cpf)) {
    erros["cpf"] = "CPF inválido";
  }

  if (!data.email) {
    erros["email"] = "Informe seu e-mail";
  } else if (!isEmail(data.email)) {
    erros["email"] = "E-mail inválido";
  }

  if (!data.celular) {
    erros["celular"] = "Informe seu celular";
  } else if (!isCelular(data.celular)) {
    erros["celular"] = "Celular inválido";
  }

  if (!data.estado) {
    erros["estado"] = "Selecione um estado";
  }

  if (!data.cidade) {
    erros["cidade"] = "Informe sua cidade";
  }

  if (!data.aceito) {
    erros["aceito"] = "Aceite os termos";
  }

  return erros;
};
