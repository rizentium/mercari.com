import { useEffect, useState } from "react";

function useFilm(id) {
  if (id == null) return [];
  const url = `${process.env.NEXT_PUBLIC_ENDPOINT_DOMAIN}/films/${id}`;
  const [film, setFilm] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFilm(data);
        setLoading(false);
      });
  }, []);

  return [film, isLoading];
}

export default useFilm;
