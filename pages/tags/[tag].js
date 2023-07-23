import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import { getAllTagsForPaths, getFilteredPostsTag } from "../../lib/posts"
import BlogPosts from "../../components/blogposts";


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
            <BlogPosts heading={tag} filteredPostData={filteredPostData}></BlogPosts>
        </Layout>
    );
}