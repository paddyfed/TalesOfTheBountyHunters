"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./backtohome.module.css";

export default function BackToHomeLink() {
  return usePathname() === "/" ? null : (
    <div className={styles.backToHome}>
      <Link href="/">← Back to home</Link>
    </div>
  );
}
