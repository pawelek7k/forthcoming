"use client";

export const CardDetailsForm = () => {
  return (
    <form>
      <div className="flex gap-4">
        <div className="flex-1">
          <label
            htmlFor="cardNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none"
            placeholder="1234 5678 1234 5678"
          />
        </div>

        <div className="flex-1">
          <label
            htmlFor="expiryDate"
            className="block text-sm font-medium text-gray-700"
          >
            Expiry Date
          </label>
          <input
            type="text"
            id="expiryDate"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none"
            placeholder="MM/YY"
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="cvv"
            className="block text-sm font-medium text-gray-700"
          >
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none"
            placeholder="123"
          />
        </div>
      </div>
    </form>
  );
};
