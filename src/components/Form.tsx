import Campo from "./Campo";
import { useState, FormEvent } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Infos } from "../types/Infos";
import { FiAlertOctagon } from "react-icons/fi";
import { validate } from "../utils/validate";

const Form = () => {
    const[cpf, setCpf] = useState('');
    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');
    const[celular, setCelular] = useState('');
    const[estado, setEstado] = useState('');
    const[cidade, setCidade] = useState('');
    const[aceito, setAceito] = useState(false);

    const[erros, setErros] = useState<Infos | null>(null)

    const handleSumbit = (e: FormEvent) => {
        e.preventDefault();

        const data: Infos = {
            cpf,
            nome,
            email,
            celular,
            estado,
            cidade,
            aceito
        }

        const validateErros = validate(data);

        console.log(data, validateErros)

        if(Object.keys(validateErros).length > 0){
            setErros(validateErros);
            alert('Preencha todos os campos');
            return 
        }

        alert('Inscrito');
    }

    return (
        <form className="flex flex-col items-center justify-center gap-3 w-full" onSubmit={handleSumbit}>

            {erros && (
                <div className="flex flex-row items-center w-full px-8 gap-1">
                <FiAlertOctagon className="text-Vermelho85 w-5 h-5" />
                <label className="font-campuni text-Vermelho85 font-bold text-sm">
                  Preencha os campos marcados corretamente
                </label>
              </div>
            )}

            <Campo
            name="CPF"
            placeholder={erros?.cpf ? erros.cpf : "Informe seu CPF"}
            tipo="number"
            valor={cpf}
            onChange={(value) => setCpf(value)} 
            iserro={!!erros?.cpf} 
            />

            <Campo
            name="Nome"
            placeholder={erros?.nome ? erros.nome : "Preencha seu nome completo"}
            tipo="text"
            valor={nome}
            onChange={(value) => setNome(value)}
            iserro={!!erros?.nome} 
            />

            <Campo
            name="Email"
            placeholder={erros?.email ? erros.email: "Informe seu melhor e-mail"}
            tipo="text"
            valor={email}
            onChange={(value) => setEmail((value))} 
            iserro={!!erros?.email} 
            />

            <Campo
            name="Celular"
            placeholder={erros?.celular ? erros.celular: "DDD + telefone"}
            tipo="number"
            valor={celular}
            onChange={(value) => setCelular((value))} 
            iserro={!!erros?.celular} 
            />

            <Campo
            name="Estado"
            placeholder={erros?.estado ? erros.estado: "Selecione"}
            tipo="text"
            valor={estado}
            onChange={(value) => setEstado(value)} 
            iserro={!!erros?.estado} 
            />

            <Campo
            name="Cidade"
            placeholder={erros?.cidade ? erros.cidade:"Informe a cidade"}
            tipo="text"
            valor={cidade}
            onChange={(value) => setCidade(value)} 
            iserro={!!erros?.estado} 
            />

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

                <label className="font-figtree font-medium text-white text-xs">
                    Aceito receber conteúdos exclusivos do Sebrae
                </label>

            </div>

            <button 
                type="submit"
                className="bg-black rounded-full w-max font-figtree font-bold text-white p-3 text-sm"
            >
                Quero fazer o Lidere
            </button>

        </form>
    );
};

export default Form;
