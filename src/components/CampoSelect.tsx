interface CampoSelectProps {
  name: string;
  placeholder?: string;
  valor: string | number;
  onChange: (value: string) => void;
  iserro?: boolean;
  options: { value: string; label: string; disabled?: boolean }[]; 
  onFocus?: () => void;
  disabled?: boolean; 
}

const CampoSelect = ({
  name,
  placeholder,
  valor,
  onChange,
  iserro,
  options,
  onFocus,
  disabled = false, 
}: CampoSelectProps) => (
  <div
    className={`w-full rounded-full flex items-center p-3 xl:p-3 2xl:p-4 ${
      disabled
        ? "opacity-60 cursor-not-allowed"
        : "focus-within:ring-2 focus-within:ring-black"
    } ${iserro ? "bg-Vermelho95 border border-Vermelho35" : "bg-white"}`}
  >
    <label
      className={`whitespace-nowrap w-14 xl:ml-4 text-left font-figtree text-LidereAzul62 font-medium text-xs pl-1 xl:text-lg xl:font-bold ${
        disabled ? "cursor-not-allowed" : ""
      }`}
    >
      {name}:
    </label>
    <select
      className={`
          w-full font-figtree font-medium focus:outline-none
          placeholder:italic bg-transparent
          text-xs
          xl:ml-4
          xl:text-lg
          ${iserro ? "text-Vermelho35" : "text-Cinza"}
          ${valor === "" ? "italic text-Cinza" : "normal-case text-black"}
          ${disabled ? "cursor-not-allowed" : ""}
        `}
      value={valor}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => {
        if (onFocus && !disabled) onFocus();
      }}
      disabled={disabled}
    >
      {placeholder && (
        <option value="" disabled hidden>
          {placeholder}
        </option>
      )}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value} disabled={opt.disabled}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

export default CampoSelect;
