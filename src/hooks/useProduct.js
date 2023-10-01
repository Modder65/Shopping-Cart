import { useState, useEffect, useRef } from "react";

export function useProduct() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMounted = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetch(
          "https://fakestoreapi.com/products/category/electronics"
        );
        const jsonData = await fetchedData.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (isMounted.current == false) {
      fetchData();
      isMounted.current = true;
    }
  }, []);

  return { data, loading, error };
}
