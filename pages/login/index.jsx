import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StyledButton, StyledInput } from "@components";
import styles from "@styles/pages/Login.module.scss";

const BodySection = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const router = useRouter();

  const onSubmit = async () => {
    const body = { username, password };
    fetch(`/api/login`, {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((data) => data.json())
      .then(() => {
        router.replace("/films");
      });
  };

  return (
    <main className={styles.main}>
      <Image src={"/logo.png"} width={200} height={165} alt="Ghibli Logo" />
      <p>Hello, please login to your account!</p>
      <div className={styles["login-box"]}>
        <StyledInput
          type={"text"}
          placeholder="Username"
          onChange={(e) => setUsername(e.currentTarget.value)}
          data-cy="input-username"
        />
        <StyledInput
          type={"password"}
          placeholder="Password"
          onChange={(e) => setPassword(e.currentTarget.value)}
          data-cy="input-password"
        />
        <StyledButton label="Login" onClick={onSubmit} dataCy="btn-login" />
      </div>
    </main>
  );
};

function Login(props) {
  const router = useRouter();
  useEffect(() => {
    if (props.cookies?.access_token) {
      router.push("/films");
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Ghibli Library | Login</title>
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

export default Login;
