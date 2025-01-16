interface CampoSelectProps {
    name: string;
    placeholder?: string;
    valor: string | number;
    onChange: (value: string) => void;
    iserro?: boolean;
    options: { value: string; label: string }[];
    onFocus?: () => void;  
  }
  
  const CampoSelect = ({
    name,
    placeholder,
    valor,
    onChange,
    iserro,
    options,
    onFocus,  
  }: CampoSelectProps) => (
    <div
      className={`w-full rounded-full flex items-center justify-center p-3
        focus-within:ring-2 focus-within:ring-black
        ${iserro ? "bg-Vermelho95 border border-Vermelho35" : "bg-white"}
      `}
    >
      <label className="w-14 text-left font-figtree text-LidereAzul62 font-medium text-xs pl-1">
        {name}:
      </label>
      <select
        className={`
          w-full font-figtree font-medium w-full focus:outline-none
          bg-transparent
          text-xs
          ${iserro ? "text-Vermelho35" : "text-Cinza"}
          ${valor === "" ? "italic text-Cinza" : "normal-case text-black"}
        `}
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => {
          if(onFocus) onFocus();
        }}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
  
  export default CampoSelect;
  