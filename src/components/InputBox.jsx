import React from 'react';

const InputBox = ({
  label,
  amount,
  selectedCurrency = "usd",
  onChangeAmount,
  onChangeCurrency,
  currencies = [],
  amountDisabled = false,
  currencyDisabled = false,
  className,
}) => {
  return (  
    <div className={`flex ${className} p-4 m-3 border rounded-3xl shadow-sm`}>
      <div className='flex flex-col'>
        <label className=' text-gray-500'>{label}</label>
        <input
          type="number"
          value={amount}
          onChange={(e) =>
            onChangeAmount && onChangeAmount(Number(e.target.value))
          }
          disabled={amountDisabled}
          className='border border-gray-300 rounded-md p-1'
        />
      </div>
      <div className='flex flex-col ml-2'>
        <label className='text-gray-500' >Currency</label>
        <select
          value={selectedCurrency}
          onChange={(e) =>
            onChangeCurrency && onChangeCurrency(e.target.value)
          }
          disabled={currencyDisabled}
          className='border border-gray-300 rounded-md p-1' 
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
