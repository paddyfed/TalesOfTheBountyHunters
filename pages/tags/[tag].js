import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from '../../styles/utils.module.css';
import { getAllTagsForPaths, getFilteredPostsTag } from "../../lib/posts"
import Link from "next/link";
import Date from "../../components/date";


export async function getStaticProps({ params }) {
    const tag = params.tag;
    const filteredPostData = await getFilteredPostsTag(tag);

    return {
        props: {
            tag,
            filteredPostData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllTagsForPaths();
    // const paths = [
    //     {
    //         params: {
    //             tag: 't'
    //         }
    //     },
    //     {
    //         params: {
    //             tag: 'w'
    //         }
    //     }
    // ]
    return {
        paths,
        fallback: 'blocking',
    };
}

export default function Home({ tag, filteredPostData }) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <h1>{tag}</h1>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                {filteredPostData.length > 0 ? (
                    // If filterdPostsData. length is greater than 0 then display them
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
                ) : (
                    // Otherwise just show a notice that there are No Results
                    <div className={utilStyles.listItem}>No Results</div>
                )}
            </section>
        </Layout>
    );
}