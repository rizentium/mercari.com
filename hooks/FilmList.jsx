import { useEffect, useState } from "react";

function useFilmList() {
  const url = `${process.env.NEXT_PUBLIC_ENDPOINT_DOMAIN}/films`;
  const [films, setFilms] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFilms(data);
        setLoading(false);
      });
  }, []);

  return [films, isLoading];
}

export default useFilmList;
