const Campo = ({ name, placeholder }: { name: string; placeholder: string }) => (
    <div className="bg-white w-full rounded-full flex items-center justify-center p-3 focus-within:ring-2 focus-within:ring-black">

      <label className="font-figtree text-LidereAzul62 font-medium px-2">
        {name}:
      </label>
  
      <input
        className="font-figtree font-medium placeholder:text-Cinza placeholder:italic w-full focus:outline-none"
        type="text"
        placeholder={placeholder}
      />

    </div>
  );
  
  export default Campo;
  