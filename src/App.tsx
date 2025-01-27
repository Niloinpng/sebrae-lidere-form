import { useState, useEffect } from "react";
import Form from "./components/Form";
import { FaCheck } from 'react-icons/fa';
import fundo from './imagens/fundo.png';
import fundomoblie from './imagens/fundomoblie.png';

function App() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "1") {
      setSuccess(true);
    }
  }, []);

  return (
    <div className="relative bg-LiderePreto10 min-h-screen w-full flex items-center justify-center overflow-hidden">

      {/* Imagem de fundo para telas menores */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat xl:hidden"
        style={{
          backgroundImage: `url(${fundomoblie})`,
          backgroundSize: 'cover', 
        }}
      />

      {/* Imagem de fundo para telas maiores */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat hidden xl:block"
        style={{
          backgroundImage: `url(${fundo})`,
          backgroundSize: '80%', 
        }}
      />

      <div className="relative flex flex-col items-center justify-center p-4 gap-3 xl:gap-5  z-10 
                      xl:mx-72
                      2xl:mx-96
                      ">
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
            <h1 className="font-campuni text-white text-center text-base 
                          xl:px-16
                          xl:text-3xl
                          font-bold
                          2xl:text-4xl
                          2xl:px-48"
                          >
              Possuo o perfil adequado para participar do Lidere e tenho interesse
            </h1>
            <h2 className="font-figtree text-white text-center text-xs
                          xl:px-16
                          xl:text-xm
                          2xl:text-xl
                          ">
              Preencha os campos abaixo para ser notificado quando houver turmas disponíveis em seu estado.
            </h2>
            <Form />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
