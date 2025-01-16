interface CampoProps {
  name: string;
  placeholder: string;
  valor: string | number;
  tipo: string;
  onChange: (value: string) => void;
  iserro?: boolean;
  formatFunction?: (value: string) => string;  
}

const Campo = ({
  name,
  placeholder,
  valor,
  tipo,
  onChange,
  iserro,
  formatFunction,
}: CampoProps) => (
  <div
    className={`w-full rounded-full flex items-center justify-center p-3
      focus-within:ring-2 focus-within:ring-black
      ${iserro ? "bg-Vermelho95 border border-Vermelho35" : "bg-white"}
    `}
  >
    <label className="font-figtree text-LidereAzul62 font-medium px-2">
      {name}:
    </label>
    <input
      className={`
        font-figtree font-medium w-full focus:outline-none
        placeholder:italic
        bg-transparent
        ${iserro ? "placeholder-Vermelho35" : "placeholder:text-Cinza"}
      `}
      type={tipo}
      placeholder={placeholder}
      value={valor}
      onChange={(e) => {
        let inputVal = e.target.value;
        if (formatFunction) {
          inputVal = formatFunction(inputVal);
        }
        onChange(inputVal);
      }}
    />
  </div>
);

export default Campo;
