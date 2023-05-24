import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { getFilteredPostsData, getAllYearsForPaths } from "../../lib/posts";
import Link from 'next/link';
import Date from '../../components/date';

export async function getStaticProps({ params }) {
    const filteredPostData = await getFilteredPostsData(params.year);
    return {
        props: {
            filteredPostData,
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
    fallback: false,
    };
}

export default function Home({ filteredPostData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>An effort to bring all my different blog posts together in one place. Also includes some Tweets I've written over the years.</p>
                <p>
                    It was created with the help of the <a href="https://nextjs.org/learn/basics/create-nextjs-app" target='_blank'>Next.js tutorial</a>.
                </p>
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
        </Layout>
    );
}