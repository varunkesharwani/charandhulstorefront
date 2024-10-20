import React from 'react';

interface QuantityInputProps {
  quantity: number;
  handleQuantityChange: (newQuantity: number) => void;
}

const QuantityInput = ({ quantity, handleQuantityChange }: QuantityInputProps) => {
  const handleIncrement = () => {
    handleQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      handleQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="flex items-center justify-between w-32 h-12 border rounded-md border-gray-300 bg-white shadow-lg">
      <button
        className="text-xl px-4 py-2 font-medium text-gray-700"
        type="button"
        onClick={handleDecrement}
        disabled={quantity <= 1}
      >
        -
      </button>
      <input
        type="text"
        name="qty"
        value={quantity}
        className="text-center w-8 bg-transparent border-none outline-none font-medium text-xl text-black"
        readOnly
      />
      <button
        className="text-xl px-4 py-2 font-medium text-gray-700"
        type="button"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default QuantityInput;
