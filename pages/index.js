import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Posts from "../components/Posts";
import Contact from "../components/Contact";
import baseApiUrl from "../utils/baseApiUrl";

export default function Home({ galleryData }) {
  return (
    <>
      <Head>
        <title>landing page</title>
      </Head>

      <Header />
      <Posts galleryData={galleryData} />
      <Contact />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  let { id } = context.query;
  const galleryRes = await fetch(`${baseApiUrl}/api/galleries?populate=*`);
  const galleryData = await galleryRes.json();

  return {
    props: {
      galleryData,
    }, // will be passed to the page component as props
  };
}
