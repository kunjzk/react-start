import { useState } from "react";
import "./App.css";
import { useCurrencyInfo } from "./hooks/useCurrencyInfo.js";
import { InputBox } from "./components/index.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("sgd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  console.log("Currency info is: ", currencyInfo);
  const options = Object.keys(currencyInfo);
  console.log(options);

  const swap = () => {
    let tmp = from;
    setFrom(to);
    setTo(tmp);
    tmp = convertedAmount;
    setConvertedAmount(amount);
    setAmount(tmp);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/106152/euro-coins-currency-money-106152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                currencyOptions={options}
                label={"From"}
                amount={amount}
                selectedCurrency={from}
                onCurrencyChange={(currency) => setFrom(currency)} // We are passing a callback function here. This will wait until an event occurs before getting executed. We are passing the function as a prop.
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                Swap
              </button>
            </div>
            <div className="w-full mb-1">
              <InputBox
                currencyOptions={options}
                label={"To"}
                amount={convertedAmount}
                amountDisabled={true}
                selectedCurrency={to}
                onCurrencyChange={(currency) => setTo(currency)} // We are passing a callback function here. This will wait until an event occurs before getting executed. We are passing the function as a prop.
                onAmountChange={(amount) => setConvertedAmount(amount)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
