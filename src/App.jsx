import { useState } from "react";
import React from 'react';

const App = () => {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [sales, setSales] = useState("");
  const [beneficiary, setBeneficiary] = useState("");

  const receiptData = [
    { id: 1, field: "Item", value: item },
    { id: 2, field: "Original Price", value: price },
    { id: 3, field: "Quantity", value: quantity },
    { id: 4, field: "Payment Method", value: paymentMethod },
    { id: 5, field: "Sales Rep", value: sales },
    { id: 6, field: "Beneficiary", value: beneficiary },
  ];

  const subTotal = price * quantity;
  const taxFee = Math.ceil(0.02 * subTotal);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex justify-center items-center">
      <div className="flex space-x-6 w-full max-w-4xl p-4">
        {/* Form Section */}
        <form className="w-full max-w-md bg-white border border-gray-300 p-6 rounded-lg shadow-md">
          <h3 className="mb-4 text-center text-xl font-bold text-blue-600">Sales Form </h3>

          <div className="mb-3">
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="item">Item</label>
            <input
              id="item"
              type="text"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              placeholder="Enter item"
              className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="mb-3">
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="price">Original Price</label>
            <input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="quantity">Quantity</label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Enter quantity"
              className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="paymentMethod">Payment Method</label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Payment Method</option>
              <option value="card">Card</option>
              <option value="transfer">Transfer</option>
              <option value="cash">Cash</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="sales">Sales Rep</label>
            <input
              id="sales"
              type="text"
              value={sales}
              onChange={(e) => setSales(e.target.value)}
              placeholder="Enter sales rep"
              className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="beneficiary">Beneficiary</label>
            <input
              id="beneficiary"
              type="text"
              value={beneficiary}
              onChange={(e) => setBeneficiary(e.target.value)}
              placeholder="Enter beneficiary"
              className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button className="w-full py-2 bg-blue-600 text-lg font-bold text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Proceed
          </button>
        </form>

        {/* Receipt Section */}
        <div className="w-full max-w-md bg-white border border-gray-300 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-blue-600 mb-4">Receipt</h2>
          <hr className="mb-4 border-gray-300" />

          <div className="space-y-3">
            {receiptData.map(({ id, field, value }) => (
              <div className="flex justify-between text-gray-700" key={id}>
                <p className="font-semibold">{field}:</p>
                <p>{value}</p>
              </div>
            ))}

            <hr className="my-3 border-gray-300" />

            <div className="flex justify-between font-semibold text-gray-700">
              <p>Subtotal:</p>
              <p>NGN {subTotal}</p>
            </div>
            <div className="flex justify-between font-semibold text-gray-700">
              <p>Tax:</p>
              <p>NGN {taxFee}</p>
            </div>
            <hr className="my-2 border-gray-300" />
            <div className="flex justify-between font-semibold text-lg text-blue-600">
              <p>Total:</p>
              <p>NGN {subTotal + taxFee}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
