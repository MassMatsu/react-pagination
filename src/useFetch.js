import { useState, useEffect, useCallback } from 'react';
import paginate from './utils';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    // create array of array, and set it as data
    const groupedData = paginate(data);
    setData(groupedData);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  return { loading, data };
};
