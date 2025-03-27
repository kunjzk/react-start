import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  // Fire the code whenever currency changes
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gs/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json)
      .then((res) => setData(res[currency]));

    console.log(data);
    return data;
  }, [currency]);
}

export { useCurrencyInfo };
