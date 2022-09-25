import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/pages/FilmById.module.scss";
import { useRouter } from "next/router";
import { useFilm } from "../../hooks";
import { ItemTile, Loading, PeopleList } from "../../components";
import styled from "styled-components";
import { useEffect } from "react";

const ContainerTitle = styled.div`
  display: flex;
  margin: 21px 0;
  align-items: flex-end;
  column-gap: 14px;
  h1,
  p {
    margin: 0;
  }
`;

const Title = (props) => {
  return (
    <ContainerTitle>
      <Image
        src={props.image}
        width={100}
        height={150}
        alt={props.title}
        loading="lazy"
        layout="fixed"
      />
      <div>
        <h1>{`${props.title} (${props.release_date})`}</h1>
        <p>{`${props.original_title} (${props.original_title_romanised})`}</p>
      </div>
    </ContainerTitle>
  );
};

const FilmData = (props) => {
  const [film, isLoading] = useFilm(props.id);

  if (isLoading) return <Loading />;
  if (!film) return <Loading label="No film found" />;

  return (
    <div className="film-data">
      <Title {...film} />
      <ItemTile label="Description" value={film.description} />
      <ItemTile label="Director" value={film.director} />
      <ItemTile label="Producer" value={film.producer} />
      <ItemTile label="Release Date" value={film.release_date} />
      <ItemTile label="Rating" value={film.rt_score} />
      <ItemTile label="Running Time" value={`${film.running_time} minutes`} />
      <PeopleList items={film.people} />
    </div>
  );
};

const BodySection = (props) => {
  if (!props.id) return <Loading />;
  return <FilmData id={props.id} />;
};

function FilmDetail(props) {
  const router = useRouter();
  useEffect(() => {
    if (!props.cookies?.access_token) {
      router.push("/login");
    }
  }, []);

  const { id } = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>Ghibli Library | Films</title>
        <meta name="description" content="Login to ghibli movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BodySection id={id} />
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps({ req }) {
  return { props: { cookies: req.cookies } };
}

export default FilmDetail;
