import { useEffect, useState } from "react";
import { fetchRegister } from "./api/usersAPI";

export const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const a = { email: "bob@i.ua", password: "Bob_2024" };

    async function testing() {
      const res = await fetchRegister(a, { abortController: controller });

      setData(res.data);
    }

    testing();
  }, []);

  console.log(data);
  return (
    <>
      <b>s</b>
    </>
  );
};
