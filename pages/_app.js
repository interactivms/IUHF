import Head from "next/head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
        <title>Instituto Universitario de las Habilidades del Futuro</title>
        <meta
          name="description"
          content="Instituo Universitario de las Habilidades del Futuro IUHF"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
      </Head>
      <a href="https://wa.me/524491812542">
        <img className="clickable pointer whatsappIcon" src="/img/whatsapp.svg" />
      </a>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
