import Head from "next/head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
        <title>Instituo Universitario de las Habilidades del Futuro</title>
        <meta
          name="description"
          content="Instituo Universitario de las Habilidades del Futuro IUHF"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
