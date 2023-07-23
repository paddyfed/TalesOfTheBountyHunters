import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { getAllYearsForStaticProps } from "../../lib/posts";
import Link from 'next/link';

export async function getStaticProps() {
    const allYears = getAllYearsForStaticProps();

    return {
        props: {
            allYears,
        },
    };
}

export default function Home({ allYears }) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Years</h2>
                <ul className={`${utilStyles.list} ${utilStyles.yearsList}`}>
                    {allYears.map((item, index) => {
                        return <li className={utilStyles.listItem} key={index}><Link href={`/year/${item[0]}`}>{item[0]}</Link> <small className={utilStyles.lightText}>({item[1]})</small></li>
                    })}
                </ul>

            </section>


        </Layout>
    );
}