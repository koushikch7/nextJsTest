import Head from "next/head";
import { Hero, About, Projects, Experiences, Footer } from "../components";

export default function Home() {
  return (
    <div className="app">
      <Head>
          <title>Koushik CH|Software Engineer|PHP|Magento|Wordpress|AWS|DevOps</title>
          <meta name="title" content="Koushik CH|Software Engineer|PHP|Magento|Wordpress|AWS|DevOps"/>
          <meta name="description" content="Most fascinated with Internet Security and Coding, With the same enthusiasm and spirit, Open to the world for solving the challenges with efficient solutions"/>
          <meta name="keywords" content="koushik ch,ch koushik,chk,magento,software engineer,e-commerce,developer,developoment,coding,technology,blog,technology,php,freelancer,wordpress"/>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Footer />
    </div>
  );
}
