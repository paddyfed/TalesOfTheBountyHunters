import Link from "next/link";
import jabbastyles from "./jabbastyles.module.css";
import Head from "next/head";

const siteTitle = "The Plots  of Jabba's Palace";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="The Plots  of Jabba's Palace" />
        <title>{siteTitle}</title>
      </Head>
      <style jsx global>
        {`
          body {
            background: #e4cfb8;
          }

          dt {
            font-weight: bold;
          }
          dt::after {
            content: ": ";
          }
          dd {
            margin-bottom: 1em;
            margin-left: 0;
            padding: 0;
          }

          dfn {
            font-size: 0.7em;
          }

          dt dfn {
            font-size: 1em;
            font-style: normal;
          }

          nav ul {
            display: block;
          }
        `}
      </style>

      <main className={jabbastyles.main}>
        <div className={jabbastyles.mainbanner}>
          The Plots of Jabba's Palace
        </div>
        <nav className={jabbastyles.leftmenu}>
          <h1>Menu</h1>
          <ul>
            <li>
              <Link href="/jabbaspalace">Home</Link>
            </li>
            <li>
              <Link href="/jabbaspalace/other-info">
                Additional Information
              </Link>
            </li>
            <li>
              <Link href="/jabbaspalace/mara-jade">Mara Jade</Link>
            </li>
            <li>
              <Link href="/jabbaspalace/bib-fortuna">Bib Fortuna</Link>
            </li>
            <li>
              <Link href="/jabbaspalace/tessk">Tessk</Link>
            </li>
            <li>
              <Link href="/jabbaspalace/ree-yees">Ree-Yees</Link>
            </li>
            <li>
              <Link href="/jabbaspalace/dannik-jerriko">Dannik Jerriko</Link>
            </li>
          </ul>
        </nav>
        <article className={jabbastyles.article}>{children}</article>
        <section className={jabbastyles.rightmenu}>
          <h1>Off Site Links</h1>
        </section>
      </main>
    </>
  );
}
