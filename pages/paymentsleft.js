import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { PaymentsBuildBlocks } from "../components/paymentsbuildblocks";
import styles from "../components/paymentsbuildblocks.module.css";

export async function getServerSideProps() {
  const res = new Date();
  const today = res.toJSON();
  return { props: { today } };
}

export default function About({ today }) {
  const title = `${siteTitle} : Payments Left`;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article className={styles.main}>
        <PaymentsBuildBlocks today={today} />
      </article>
    </Layout>
  );
}
