import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { getMinYear, getMaxYear } from "../../lib/posts";
import Link from 'next/link';
import Date from '../../components/date';

export async function getStaticProps() {
    // const filteredPostData = await getFilteredPostsData(params.year);
    //const year = params.year;
    //const prevYear = +params.year - 1;
    //const nextYear = +params.year + 1;
    const minYear = getMinYear();
    const maxYear = getMaxYear();

    return {
        props: {
            minYear,
            maxYear,
        },
    };
}

export default function Home({ minYear, maxYear }) {

    let allYears = [];

    for (let i = minYear; i <= maxYear; i++) {
        allYears.push(i);
    }

    allYears.sort((a, b) => {
        return b - a;
    });

    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <h1></h1>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Years</h2>
                <ul className={`${utilStyles.list} ${utilStyles.yearsList}`}>
                    {allYears.map((item, index) => {
                        return <li className={utilStyles.listItem} key={index}><Link href={`/year/${item}`}>{item}</Link></li>
                    })}
                </ul>

            </section>


        </Layout>
    );
}