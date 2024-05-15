import { useEffect, useState } from "react";

export const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function testing() {}

    testing();
  }, []);
  return (
    <>
      <b>s</b>
    </>
  );
};
