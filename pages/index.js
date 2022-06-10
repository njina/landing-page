import Head from "next/head";
import Header from "../components/Header";
import Company from "../components/Company";
import Products from "../components/Products";
import Posts from "../components/Posts";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home({}) {
  return (
    <>
      <Head>
        <title>landing page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      <Company />
      <Products />
      <Posts />
      <Contact />
      <Footer />
    </>
  );
}
