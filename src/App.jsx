import { useEffect, useState } from "react";
import { fetchPing } from "./api/pingAPI";

export const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const response = await fetchPing();
      setArticles(response.data);
    }

    fetchArticles();
  }, []);
  return (
    <>
      <b>{articles.text}</b>
    </>
  );
};
