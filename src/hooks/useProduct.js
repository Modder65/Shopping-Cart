import { useState, useEffect } from "react";

let cache;

export function useProduct() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (cache) {
        setData(cache);
        setLoading(false);
        return;
      }
      try {
        const fetchedData = await fetch(
          "https://fakestoreapi.com/products/category/electronics"
        );
        const jsonData = await fetchedData.json();
        setData(jsonData);
        cache = jsonData; // Cache the data
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
}
