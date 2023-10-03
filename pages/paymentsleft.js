import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { PaymentsBuildBlocks } from "../components/paymentsbuildblocks";
import styles from "../components/paymentsbuildblocks.module.css";

export default function About() {
  const title = `${siteTitle} : Payments Left`;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article className={styles.main}>
        <PaymentsBuildBlocks />
      </article>
    </Layout>
  );
}
