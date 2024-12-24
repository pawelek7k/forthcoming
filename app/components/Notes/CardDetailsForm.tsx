type InputField = {
  id: string;
  placeholder: string;
};

export const CardDetailsForm = () => {
  const inputFields: InputField[] = [
    { id: "cardNumber", placeholder: "1234 5678 1234 5678" },
    { id: "expiryDate", placeholder: "MM/YY" },
    { id: "cvv", placeholder: "CVV" },
  ];

  return (
    <form>
      <div className="flex gap-4 border border-gray-300 rounded-lg bg-zinc-50 z-10 overflow-hidden">
        {inputFields.map(({ id, placeholder }) => (
          <input
            key={id}
            type="text"
            id={id}
            className="block w-full p-2 bg-zinc-50 outline-none placeholder:text-xs"
            placeholder={placeholder}
          />
        ))}
      </div>
    </form>
  );
};
