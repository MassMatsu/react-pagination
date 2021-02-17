import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export default function useFetch() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();

    //console.log(data);
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, data };
}
