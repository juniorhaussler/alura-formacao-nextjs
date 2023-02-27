//import App from "next/app";
import Head from "next/head";
import GlobalStyle from "../src/components/theme/GlobalStyle";


export default function MyApp({ Component, pageProps }) {
  return (
      <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:wght@700;900&display=swap" rel="stylesheet"/>
      </Head>
        {/* Tudo que é colocado aqui, é compartilhado em todas as páginas */}
        <GlobalStyle/>
        <Component {...pageProps} />
      </>
  )
}