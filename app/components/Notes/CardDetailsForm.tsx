"use client";

export const CardDetailsForm = () => {
  return (
    <form>
      <div className="flex gap-4">
        <div className="flex-1">
          <input
            type="text"
            id="cardNumber"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none"
            placeholder="1234 5678 1234 5678"
          />
        </div>

        <div className="flex-1">
          <input
            type="text"
            id="expiryDate"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none"
            placeholder="MM/YY"
          />
        </div>
        <div className="flex-1">
          <input
            type="text"
            id="cvv"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none"
            placeholder="CVV"
          />
        </div>
      </div>
    </form>
  );
};
