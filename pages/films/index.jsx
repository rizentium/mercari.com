import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FilmCard, Loading } from "../../components";
import { useFilmList } from "../../hooks";
import styles from "../../styles/pages/Films.module.scss";

const FilmList = () => {
  const [films, isLoading] = useFilmList();

  if (isLoading) return <Loading />;
  if (!films) return <Loading label="No Film Found" />;

  return (
    <div>
      {films.map((f, i) => (
        <FilmCard data={f} key={i} />
      ))}
    </div>
  );
};

const BodySection = () => {
  return (
    <div>
      <h1>Ghibli Films</h1>
      <FilmList />
    </div>
  );
};

function Films(props) {
  const router = useRouter();
  useEffect(() => {
    if (!props.cookies?.access_token) {
      router.push("/login");
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Ghibli Library | Films</title>
        <meta name="description" content="Login to ghibli movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BodySection />
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps({ req }) {
  return { props: { cookies: req.cookies } };
}

export default Films;
