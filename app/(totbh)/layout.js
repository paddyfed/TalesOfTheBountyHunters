import Image from "next/image";
import styles from "../../components/layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import "../../styles/global.css";
import MainNav from "./components/MainNav";
import BackToHomeLink from "./components/BackToHomeLink";

const name = "Tales of the Bounty Hunters";

export const metadata = {
  title: {
    default: name,
    template: `${name} : %s`,
  },
  description: "Blog for Paddy O'Hara",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <div className={styles.container}>
            <header className={styles.header}>
              <MainNav />

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

            <BackToHomeLink />
          </div>
        </body>
      </html>
    </>
  );
}
