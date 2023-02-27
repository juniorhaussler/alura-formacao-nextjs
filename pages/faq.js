import Head from "next/head";
import Link from "next/link";

// SSG - Static Site Generation
// SSG - Server Side Rendering
// ISG - Incremental Static Generation

// export async function getServerSideProps() {
//   console.log("Roda a cada acesso que vc recebe")
// }
//console.log("Em modo Dev sempre roda a cada acesso")

export async function getStaticProps() {
  //console.log("Em modo Dev sempre roda a cada acesso")
  //console.log("Roda SOMENTE em build time")
  console.log();
  const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
  const faq = await fetch(FAQ_API_URL)
      .then((respostaDoServidor) =>{
        return respostaDoServidor.json();
      })
      .then((resposta) => {
        // setTimeout(() => {setFaq(resposta);}, 3 * 1000);
        return resposta;
      });
  
  return {
    props: {
      qualquerCoisa: 'que eu passar aqui',
      faq,
    },
  }
}

// Aqui não utilizamos o componente criado Link, pois estamos com a útima versão do Nextjs instalada.

export default function FAQPage({ faq }) {
  
  return (
    <div>
      <Head>
        <title>FAQ- Alura Cases Campanha</title>
      </Head>
      <h1>Alura Cases - Página de Perguntas FAQ</h1>
      <Link href="/">Ir para a home</Link>
      <ul>
        {faq.map(({answer, question}) => (
        <li key={question}>
          <article>
            <h2>{question}</h2>
            <p>{answer}</p>
          </article>
        </li>
        ))}
      </ul>
    </div>
  )
}