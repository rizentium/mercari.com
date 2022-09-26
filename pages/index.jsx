import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { StyledButton } from "@components";
import styles from "@styles/pages/Home.module.scss";

const Main = () => {
  return (
    <main className={styles.main}>
      <Image src={"/logo.png"} width={"250"} height={"200"} alt="Ghibli Logo" />

      <h1 className={styles.title}>
        Welcome to <Link href="/">STUDIO GHIBLI</Link>
      </h1>

      <p className={styles.description}>
        Bring your imagination <code className={styles.code}>fly away</code>
      </p>

      <StyledButton
        label="Get Started"
        color="primary"
        size="lg"
        href="/login"
        dataCy="btn-login"
      />
    </main>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ghibli Library</title>
        <meta name="description" content="Ghibli Library Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </div>
  );
}
