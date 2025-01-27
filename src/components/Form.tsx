import Campo from "./Campo";
import CampoSelect from "./CampoSelect";
import { useState, FormEvent } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Infos } from "../types/Infos";
import { FiAlertOctagon } from "react-icons/fi";
import { validate } from "../utils/validate";
import estadosCidades from "../utils/estados-cidades.json";

interface FormProps {
    onSuccess?: () => void; 
}


const UF = estadosCidades.estados.map((uf) => ({
    value: uf.sigla,
    label: uf.nome,
  }));

const formatCPF = (value: string): string => {
    let v = value.replace(/\D/g, "").slice(0, 11);
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return v;
};
  
const formatTelefone = (value: string): string => {
    let v = value.replace(/\D/g, "").slice(0, 11);
    if (v.length <= 10) {
      v = v.replace(/(\d{2})(\d)/, "($1) $2");
      v = v.replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      v = v.replace(/(\d{2})(\d)/, "($1) $2");
      v = v.replace(/(\d{5})(\d)/, "$1-$2");
    }
    return v;
};

const Form = ({ onSuccess }: FormProps) => {
    const[cpf, setCpf] = useState('');
    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');
    const[celular, setCelular] = useState('');
    const[estado, setEstado] = useState('');
    const[cidade, setCidade] = useState('');
    const[aceito, setAceito] = useState(false);
    const[erros, setErros] = useState<Infos | null>(null)
    const cidadesDaUF =
    estadosCidades.estados.find((uf) => uf.sigla === estado)?.cidades || [];
    const opcoesCidade = cidadesDaUF.map((cidade) => ({
        value: cidade,
        label: cidade,
    }));

    const handleSumbit = (e: FormEvent) => {
        //e.preventDefault();
      
        const data: Infos = {
          cpf,
          nome,
          email,
          celular,
          estado,
          cidade,
          aceito
        };
      
        const validateErros = validate(data);
      
        console.log(data, validateErros);
      
        if (Object.keys(validateErros).length > 0) {
          if (validateErros.cpf) setCpf('');
          if (validateErros.nome) setNome('');
          if (validateErros.email) setEmail('');
          if (validateErros.celular) setCelular('');
          if (validateErros.estado) setEstado('');
          if (validateErros.cidade) setCidade('');
      
          setErros(validateErros);
          e.preventDefault();
          return false;
        }
        
        //if (onSuccess) {onSuccess();}

        };
        
    return (
        <form action="https://cl.s12.exct.net/DEManager.aspx" className="flex flex-col items-center justify-center gap-3 xl:gap-5 w-full 2xl:px-4" onSubmit={handleSumbit}>
        
        <input type='hidden' name='localidade' value='br'/>
        <input type="hidden" name="_clientID" value="526001297" />
        <input type="hidden" name="_deExternalKey" value={"AAAAAAAAAAAAAA"} /> 
        <input type="hidden" name="_action" value="add" />
        <input type="hidden" name="_returnXML" value="0" />
        <input type="hidden" name="_successURL" value={window.location.href + "/?success=1"} />
        <input type="hidden" name="_errorURL" value="http://www.sebrae.com.br" />
        <input type="hidden" name="celular" value={celular.replace(/[^\d]+/g,'')} />
        <input type="hidden" name="cpf" value={cpf.replace(/[^\d]+/g,'')} />

            {erros && (
                <div className="flex flex-row items-center w-full px-2 gap-1 xl:gap-2">
                <FiAlertOctagon className="text-Vermelho85 w-5 h-5 xl:w-6 xl:h-6" />
                <label className="font-campuni text-Vermelho85 font-bold text-xs xl:text-base">
                  Preencha os campos marcados corretamente
                </label>
              </div>
            )}

            <Campo
            name="CPF"
            placeholder={erros?.cpf ? erros.cpf : "Informe seu CPF"}
            tipo="text" 
            valor={cpf}
            onChange={(value) => setCpf(value)}
            iserro={!!erros?.cpf}
            formatFunction={formatCPF}
            onFocus={() => {
                if(erros?.cpf) {
                setErros(prev => ({ ...prev, cpf: undefined })); 
                }
            }}
            />

            <Campo
            name="Nome"
            placeholder={erros?.nome ? erros.nome : "Preencha seu nome completo"}
            tipo="text"
            valor={nome}
            onChange={(value) => setNome(value)}
            iserro={!!erros?.nome}
            onFocus={() => {
                if(erros?.nome) {
                setErros(prev => ({ ...prev, nome: undefined })); 
                }
            }}
            />

            <div className="w-full flex flex-col xl:flex-row gap-3">

            <Campo
            name="E-mail"
            placeholder={erros?.email ? erros.email: "Informe seu melhor e-mail"}
            tipo="text"
            valor={email}
            onChange={(value) => setEmail((value))} 
            iserro={!!erros?.email} 
            onFocus={() => {
                if(erros?.email) {
                setErros(prev => ({ ...prev, email: undefined })); 
                }
            }}
            />

            <Campo
            name="Celular"
            placeholder={erros?.celular ? erros.celular : "DDD + telefone"}
            tipo="text" 
            valor={celular}
            onChange={(value) => setCelular(value)}
            iserro={!!erros?.celular}
            formatFunction={formatTelefone}
            onFocus={() => {
                if(erros?.celular) {
                setErros(prev => ({ ...prev, celular: undefined })); 
                }
            }}
            />

            </div>

            <div className="w-full flex flex-col xl:flex-row gap-3">

            <CampoSelect
            name="Estado"
            placeholder={erros?.estado ? erros.estado:"Selecione"}
            valor={estado}
            onChange={(value) => setEstado(value)}
            iserro={!!erros?.estado} 
            options={[UF[0], ...UF]}
            onFocus={() => {
                if(erros?.estado) {
                  setErros(prev => ({ ...prev, estado: undefined }));
                }
              }}
            />

            <CampoSelect
            name="Cidade"
            placeholder={erros?.cidade ? erros.cidade : "Informe a cidade"}
            valor={cidade}
            onChange={(value) => setCidade(value)}
            iserro={!!erros?.cidade}
            options={
                estado
                ? [{ value: "", label: "Selecione" }, ...opcoesCidade]
                : [{ value: "", label: "Informe a cidade" }]
            }
            onFocus={() => {
                if (erros?.cidade) {
                setErros((prev) => ({ ...prev, cidade: undefined }));
                }
            }}
            disabled={(!estado)}
            />


            </div>

            <div className="w-full flex flex-col xl:flex-row gap-3 my-3 xl:my-0 items-center justify-center xl:justify-between xl:items-start">

            <div className="flex items-center gap-2">

                <label className="relative w-5 h-5">
                    <input
                        type="checkbox"
                        className="appearance-none w-full h-full bg-white rounded focus:ring-0 peer"
                        checked={aceito}
                        onChange={(e) => setAceito(e.target.checked)}
                    />
                    {aceito && (
                        <FaCheck className="absolute top-0 left-0 w-full h-full text-AzulEscuro flex items-center justify-center p-1" />
                    )}
                </label>

                <label className="font-figtree font-medium text-white text-xs xl:text-base">
                    Aceito receber conteúdos exclusivos do Sebrae
                </label>

            </div>

            <button 
                type="submit"
                className="bg-black rounded-full w-max font-figtree font-bold text-white p-3 xl:p-4 2xl:p-6 text-sm xl:text-lg hover:bg-opacity-50"
            >
                Quero fazer o Lidere
            </button>

            </div>

        </form>
    );
};

export default Form;
