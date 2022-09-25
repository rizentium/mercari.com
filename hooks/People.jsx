import { useEffect, useState } from "react";

function usePeople(url) {
  const [people, setPeople] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const isArray = Array.isArray(data);

        setPeople(isArray ? null : data);
        setLoading(false);
      });
  }, []);

  return [people, isLoading];
}

export default usePeople;
