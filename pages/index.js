import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Profils from "../components/Profils";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NexTech Innovation</title>
        <meta
          name="description"
          content="NexTech Innovation is a web development company."
        />
        <link rel="icon" href="/public/assets/logoTech.avif" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Profils />
      <Contact />
    </div>
  );
}
