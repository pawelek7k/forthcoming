"use client";

export const CardDetailsForm = () => {
  return (
    <form>
      <div className="flex gap-4 border border-gray-300 rounded-lg bg-zinc-50 z-10 overflow-hidden">
        <input
          type="text"
          id="cardNumber"
          className=" block w-full p-2 bg-zinc-50 outline-none z-0"
          placeholder="1234 5678 1234 5678"
        />
        <input
          type="text"
          id="expiryDate"
          className="block w-full p-2 bg-zinc-50 outline-none"
          placeholder="MM/YY"
        />
        <input
          type="text"
          id="cvv"
          className=" block w-full p-2 bg-zinc-50 outline-none"
          placeholder="CVV"
        />
      </div>
    </form>
  );
};
