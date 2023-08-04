import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { getFilteredPostsData, getAllYearsForPaths, getMinYear, getMaxYear } from "../../lib/posts";
import Link from 'next/link';
import BlogPosts from '../../components/blogposts';

export async function getStaticProps({ params }) {
    const filteredPostData = await getFilteredPostsData(params.year);
    const year = params.year[0];
    const month = params.year[1];
    const prevYear = +year - 1;
    const nextYear = +year + 1;
    const minYear = getMinYear();
    const maxYear = getMaxYear();

    if (year.length !== 4) {
        return {
            notFound: true,
        };
    }

    if (month && (month.length !== 2 || +month > 12 || +month < 1)) {
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
            <BlogPosts heading={year} filteredPostData={filteredPostData}></BlogPosts>

            <div className={utilStyles.articleNavigation}>
                {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus */}
                {+prevYear >= minYear ? (<Link href={`/year/${prevYear}`}>{`${prevYear}`}</Link>) : (<span>{`${prevYear}`}</span>)}
                {<span>{year}</span>}
                {+nextYear <= maxYear ? (<Link href={`/year/${nextYear}`}>{`${nextYear}`}</Link>) : (<span>{`${nextYear}`}</span>)}
            </div>
        </Layout>
    );
}