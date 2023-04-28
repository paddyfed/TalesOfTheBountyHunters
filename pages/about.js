import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function About() {
    return (
        <Layout about>
            <Head>
                <title>{siteTitle} : About</title>
            </Head>
            <section>
                <p>This is the About page</p>
            </section>
        </Layout>
    )
}