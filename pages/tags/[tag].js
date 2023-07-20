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