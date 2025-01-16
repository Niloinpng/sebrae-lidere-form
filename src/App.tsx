import { useState } from "react";
import Form from "./components/Form";
import { FaCheck } from 'react-icons/fa';

function App() {
  const [success, setSuccess] = useState(false);

  return (
    <div className="bg-LiderePreto10 min-h-screen w-full flex items-center justify-center">
      <div className="bg-LidereAzul62 flex flex-col items-center justify-center p-4 gap-2 min-h-[600px]">
      {success ? (
        <div className="flex flex-col items-center justify-center gap-16">
          <div className="bg-white rounded-full p-4">
            <FaCheck className="text-LidereAzul62 text-5xl" />
          </div>
          <h1 className="font-campuni text-white text-center text-4xl font-bold">
            Suas informações foram enviadas, aguarde o nosso contato.
          </h1> 
        </div>
      ) : (
          <>
            <h1 className="font-campuni text-white text-center text-base">
              Possuo o perfil adequado para participar do Lidere e <span className="font-bold">tenho interesse</span>
            </h1>
            <h2 className="font-alegreya text-white text-center text-xs">
              Lidere é um curso presencial que estará disponível em todo o Brasil a partir de 2025. Preencha os campos abaixo para ser notificado quando houver turmas disponíveis em seu estado
            </h2>
            <Form onSuccess={() => setSuccess(true)} />
          </>
      )}
      </div>
    </div>
  );
}

export default App;
