import Form from "./components/Form";

function App() {
  return (
    <div className="bg-LiderePreto10 min-h-screen w-full flex items-center justify-center">
      <div className="bg-LidereAzul62 flex flex-col items-center justify-center p-4 gap-2">
        <h1 className="font-campuni text-white text-center text-base">Possuo o perfil adequado para participar do Lidere e <span className="font-bold">tenho interesse</span></h1>
        <h2 className="font-alegreya text-white text-center text-xs">Lidere é um curso presencial que estará disponível em todo o Brasil a partir de 2025. Preencha os campos abaixo para ser notificado quando houver turmas disponíveis em seu estado</h2>
        <Form />
      </div>
    </div>
  );
}

export default App;
