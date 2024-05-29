import Link from "next/link";
import jabbastyles from "./jabbastyles.module.css";
import "./global.css";

export const siteTitle = "The Plots of Jabba's Palace";

export default function Layout({ children }) {
  return (
    <html>
      <body>
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
            <nav>
              <ul>
                <li>
                  <Link href="https://www.starwars.com" target="_blank">
                    StarWars.com
                  </Link>
                </li>
                <li>
                  <Link href="https://www.theforce.net" target="_blank">
                    TheForce.net
                  </Link>
                </li>
                <li>
                  <strong>Star Wars Databank</strong>
                </li>
                <li>
                  <Link href="https://www.starwars.com/databank/tatooine">
                    Tatooine
                  </Link>
                </li>
                <li>
                  <Link href="https://www.starwars.com/databank/jabba-the-hutt">
                    Jabba the Hutt
                  </Link>
                </li>
                <li>
                  <Link href="https://www.starwars.com/databank/jabba-the-hutts-palace">
                    Jabba's Palace
                  </Link>
                </li>
                <li>
                  <Link href="/">Tales of the Bounty Hunters</Link>
                </li>
              </ul>
            </nav>
          </section>
        </main>
      </body>
    </html>
  );
}
