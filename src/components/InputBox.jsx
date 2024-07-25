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
}) => {
  return (  
    <div>
      <div>
        <label>{label}</label>
        <input
          type="number"
          value={amount}
          onChange={(e) =>
            onChangeAmount && onChangeAmount(Number(e.target.value))
          }
          disabled={amountDisabled}
        />
      </div>
      <div>
        <label>Currency</label>
        <select
          value={selectedCurrency}
          onChange={(e) =>
            onChangeCurrency && onChangeCurrency(e.target.value)
          }
          disabled={currencyDisabled}
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
