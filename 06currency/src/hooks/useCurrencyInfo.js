import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  // Fire the code whenever currency changes
  useEffect(() => {
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    console.log("Making request to: ", url);
    fetch(url)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((ratesData) => {
        console.log(ratesData[currency]);
        setData(ratesData[currency]);
      });
  }, [currency]);

  console.log("Rendering with data:", data);
  return data;
}

export { useCurrencyInfo };
