import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function About() {

    const title = `${siteTitle} : About`
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <section>
                <p>This is the About page</p>
            </section>
        </Layout>
    )
}