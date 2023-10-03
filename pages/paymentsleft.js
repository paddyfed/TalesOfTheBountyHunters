import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { PaymentsBuildBlocks } from "../components/paymentsbuildblocks";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function About() {
  const title = `${siteTitle} : About`;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <PaymentsBuildBlocks />
    </Layout>
  );
}
