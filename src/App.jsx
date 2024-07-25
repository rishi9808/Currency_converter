import { useState, useEffect } from "react";
import useCurrency from "./hooks/useCurrency.js";
import { InputBox } from "./components/index.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [converted, setConverted] = useState(0);
  const [options, setOptions] = useState([]);
  const [currencyInfo, setCurrencyInfo] = useState({});

  const currencyinfo = useCurrency(from);

  useEffect(() => {
    if (currencyinfo && currencyinfo[from]) {
      setCurrencyInfo(currencyinfo);
      console.log("currencyinfo " , currencyinfo[from][to]);
      setOptions(Object.keys(currencyinfo[from]));
    }
  }, [currencyinfo, from]);

  const convert = () => {
    if (currencyInfo && currencyInfo[from][to]) {
      const rate = currencyInfo[from][to];
      setConverted(amount * rate);
      console.log("converted " + converted);
    }
  };

  return (
    <div>
      <h1>Currency converter</h1>

      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <InputBox
          label="From"
          amount={amount}
          selectedCurrency={from}
          onChangeAmount={(value) => setAmount(value)}
          onChangeCurrency={(value) => setFrom(value)}
          currencies={options}
        />

        <InputBox
          label="To"
          amount={converted}
          selectedCurrency={to}
          onChangeCurrency={(value) => setTo(value)}
          currencies={options}
          amountDisabled={true}
        />

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
