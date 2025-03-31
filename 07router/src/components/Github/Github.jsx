import React from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/kunjzk")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //         console.log(data);
  //       });
  //   }, []);

  const data = useLoaderData();

  return (
    <div className="bg-orange-700 flex flex-col justify-center items-center text-black text-4xl p-4">
      <div>Github followers: {data.followers}</div>
      <img src={data.avatar_url} width={300} alt="avatar" />
    </div>
  );
}

export default Github;

export const githubLoader = async () => {
  console.log("fetching data");
  const response = await fetch("https://api.github.com/users/kunjzk");
  return response.json();
};
