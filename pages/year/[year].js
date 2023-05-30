import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { getFilteredPostsData, getAllYearsForPaths, getMinYear, getMaxYear } from "../../lib/posts";
import Link from 'next/link';
import Date from '../../components/date';

export async function getStaticProps({ params }) {
    const filteredPostData = await getFilteredPostsData(params.year);
    const year = params.year;
    const prevYear = +params.year - 1;
    const nextYear = +params.year + 1;
    const minYear = getMinYear();
    const maxYear = getMaxYear();

    if (year.length !== 4) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            filteredPostData,
            year,
            prevYear,
            nextYear,
            minYear,
            maxYear,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllYearsForPaths();
    // const paths = [
    //         {
    //             params: {
    //                 year: '2001'
    //             }
    //         },
    //         {
    //             params: {
    //                 year: '2002'
    //             }
    //         }
    //     ]

    return {
        paths,
        fallback: 'blocking',
    };
}

export default function Home({ filteredPostData, year, prevYear, nextYear, minYear, maxYear }) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <h1>{year}</h1>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {filteredPostData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>

            <div className={utilStyles.articleNavigation}>
                {+prevYear >= minYear ? (<Link href={`/year/${prevYear}`}>{`${prevYear}`}</Link>) : (<span>{`${prevYear}`}</span>)}
                {<span>{year}</span>}
                {+nextYear <= maxYear ? (<Link href={`/year/${nextYear}`}>{`${nextYear}`}</Link>) : (<span>{`${nextYear}`}</span>)}
            </div>
        </Layout>
    );
}