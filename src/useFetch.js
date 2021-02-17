import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();

    setData(data);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  return { loading, data };
};
