import Campo from "./Campo";
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const Form = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <form className="flex flex-col items-center justify-center gap-3 w-full">

            <Campo name="CPF" placeholder="Informe seu CPF" />
            <Campo name="Nome" placeholder="Preencha seu nome completo" />
            <Campo name="Email" placeholder="Informe seu melhor e-mail" />
            <Campo name="Celular" placeholder="DDD + telefone" />
            <Campo name="Estado" placeholder="Selecione" />
            <Campo name="Cidade" placeholder="Informe a cidade" />

            <div className="flex items-center gap-2">

                <label className="relative w-5 h-5">
                    <input
                        type="checkbox"
                        className="appearance-none w-full h-full bg-white rounded focus:ring-0 peer"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    {isChecked && (
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
