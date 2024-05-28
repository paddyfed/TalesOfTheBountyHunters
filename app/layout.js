import Image from "next/image";
import styles from "../components/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import "../styles/global.css";

const name = "Tales of the Bounty Hunters";

export const metadata = {
  title: name,
  description: "Blog for Paddy O'Hara",
};

export default function Layout({ children }) {
  return (
    <>
      <html>
        <body>
          <div className={styles.container}>
            <header className={styles.header}>
              <nav>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/year">Year</Link>
                  </li>
                  <li>
                    <Link href="/tags">Tags</Link>
                  </li>
                  <li>
                    <Link href="/paymentsleft">Payments Left</Link>
                  </li>
                  <li>
                    <Link href="/jabbaspalace">Jabba's Palace</Link>
                  </li>
                </ul>
              </nav>

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
            </header>
            <main>{children}</main>

            <div className={styles.backToHome}>
              <Link href="/">← Back to home</Link>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
