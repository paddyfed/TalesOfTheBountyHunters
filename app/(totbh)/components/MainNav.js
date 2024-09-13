import Link from "next/link";
export default function MainNav() {
  return (
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
          <Link href="/now">Now</Link>
        </li>
        <li>
          <Link href="/tags/Solar%20Update">Solar Updates</Link>
        </li>
        <li>
          <Link href="/energybyyear">Energy by Year</Link>
        </li>
        <li>
          <Link href="/paymentsleft">Payments Left</Link>
        </li>
        <li>
          <Link href="/jabbaspalace">Jabba's Palace</Link>
        </li>
      </ul>
    </nav>
  );
}
