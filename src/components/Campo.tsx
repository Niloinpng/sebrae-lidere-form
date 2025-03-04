interface CampoProps {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  valor: string | number;
  tipo: string;
  onChange: (value: string) => void;
  iserro?: boolean;
  formatFunction?: (value: string) => string;  
  onFocus?: () => void;  
}

const Campo = ({
  id,
  label,
  name,
  placeholder,
  valor,
  tipo,
  onChange,
  iserro,
  formatFunction,
  onFocus,
  
}: CampoProps) => (
  <div
    className={`w-full rounded-full flex items-center p-3 xl:p-3 2xl:p-4
      focus-within:ring-1 focus-within:ring-black
      ${iserro ? "bg-Vermelho95 border border-Vermelho35" : "bg-white"}
    `}
  >
    <label className="whitespace-nowrap w-14 xl:ml-4 text-left font-figtree text-LidereAzul62 font-medium text-xs pl-1 xl:text-lg xl:font-bold">
      {label}:
    </label>
    <input
      className={`
        w-full font-figtree font-medium focus:outline-none
        placeholder:italic bg-transparent
        text-xs
        xl:ml-4
        xl:text-lg
        ${iserro ? "placeholder-Vermelho35" : "placeholder:text-Cinza"}
      `}
      type={tipo}
      name={name}
      id={id}
      placeholder={placeholder}
      value={valor}
      onChange={(e) => {
        let inputVal = e.target.value;
        if (formatFunction) {
          inputVal = formatFunction(inputVal);
        }
        onChange(inputVal);
      }}
      onFocus={() => {
        if(onFocus) onFocus();
      }}
    />
  </div>
);

export default Campo;
