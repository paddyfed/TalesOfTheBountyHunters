import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import MainNav from "../app/(totbh)/components/MainNav";

const name = "Tales of the Bounty Hunters";
export const siteTitle = "Tales of the Bounty Hunters";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="Blog for Paddy O'Hara" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <MainNav />
          {home ? (
            <>
              <Image
                priority
                src="/images/profile_2.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt="My Profile Picture"
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <Image
                  priority
                  src="/images/profile_2.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt="My Profile Picture"
                />
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </div>
    </>
  );
}
