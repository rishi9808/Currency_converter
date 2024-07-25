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
      console.log("currencyinfo ", currencyinfo[from][to]);
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
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[url('https://media.istockphoto.com/id/1357752804/photo/trading-charts-background.webp?b=1&s=170667a&w=0&k=20&c=0hpUtlhpocwrcA0bNfESQoemThy6rZEi3M3zILDazUM=')] bg-no-repeat bg-cover">
      <div className=" text-purple-800 bg-slate-50 border border-black p-20 rounded-3xl ">
        <h1 className="text-3xl font-semibold text-center mb-5">Currency converter</h1>

        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="flex flex-col items-center"
        >
          <InputBox
            label="From"
            amount={amount}
            selectedCurrency={from}
            onChangeAmount={(value) => setAmount(value)}
            onChangeCurrency={(value) => setFrom(value)}
            currencies={options}
            className=""
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
            <button type="submit"
            className="bg-purple-800 text-white px-4 py-2 rounded-lg"
            >Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
