import Head from 'next/head';
import HeroBanner from '../src/components/HeroBanner';
import MyDetails from '../src/components/MyDetails';
import ContactMe from '../src/components/ContactMe';

export default function Home() {
  return (
    <>
      <Head>
        <title>Siulok Tang - Home</title>
        <meta
          name="description"
          content="This is the homepage of the portfolio site created by Siulok Tang"
        />
      </Head>
      <HeroBanner />
      <MyDetails />
      <ContactMe />
    </>
  );
}
