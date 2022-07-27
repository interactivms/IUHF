import Head from "next/head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="public/favicon.ico" />
        <title>Instituo Universitario de las Habilidades del Futuro</title>
        <meta
          name="description"
          content="Instituo Universitario de las Habilidades del Futuro IUHF"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
