import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Posts from "../components/Posts";
import Contact from "../components/Contact";

export default function Home({}) {
  return (
    <>
      <Head>
        <title>landing page</title>
      </Head>

      <Header />
      <Posts />
      <Contact />
      <Footer />
    </>
  );
}
