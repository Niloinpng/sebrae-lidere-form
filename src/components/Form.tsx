import Campo from "./Campo";
import { useState, FormEvent } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Infos } from "../types/Infos";
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
            alert('Preencha todos os campos')
            return 
        }

        alert('test')
    }

    return (
        <form className="flex flex-col items-center justify-center gap-3 w-full" onSubmit={handleSumbit}>

            <Campo
            name="CPF"
            placeholder="Informe seu CPF"
            tipo="number"
            valor={cpf}
            onChange={(value) => setCpf(value)} 
            />

            <Campo
            name="Nome"
            placeholder="Preencha seu nome completo"
            tipo="text"
            valor={nome}
            onChange={(value) => setNome(value)} 
            />

            <Campo
            name="Email"
            placeholder="Informe seu melhor e-mail"
            tipo="text"
            valor={email}
            onChange={(value) => setEmail((value))} 
            />

            <Campo
            name="Celular"
            placeholder="DDD + telefone"
            tipo="number"
            valor={celular}
            onChange={(value) => setCelular((value))} 
            />

            <Campo
            name="Estado"
            placeholder="Selecione"
            tipo="text"
            valor={estado}
            onChange={(value) => setEstado(value)} 
            />

            <Campo
            name="Cidade"
            placeholder="Informe a cidade"
            tipo="text"
            valor={cidade}
            onChange={(value) => setCidade(value)} 
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
