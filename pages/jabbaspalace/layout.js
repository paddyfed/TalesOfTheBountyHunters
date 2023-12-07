import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/jabbaspalace">Home</Link>
          </li>
          <li>
            <Link href="/jabbaspalace/other-info">Additional Informaion</Link>
          </li>
          <li>
            <Link href="/jabbaspalace/mara-jade">Mara</Link>
          </li>
          <li>
            <Link href="/jabbaspalace/bib-fortuna">Bib</Link>
          </li>
          <li>
            <Link href="/jabbaspalace/tessk">Tessk</Link>
          </li>
          <li>
            <Link href="/jabbaspalace/ree-yees">Ree Yees</Link>
          </li>
          <li>
            <Link href="/jabbaspalace/dannik-jerriko">Dannik</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  );
}
