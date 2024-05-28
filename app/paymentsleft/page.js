"use client";

import { PaymentsBuildBlocks } from "../components/paymentsbuildblocks";
import styles from "../components/paymentsbuildblocks.module.css";

// export async function getServerSideProps() {
//   return { props: { today } };
// }

export default function PaymentsLeft() {
  const res = new Date();
  const today = res.toJSON();
  return (
    <article className={styles.main}>
      <PaymentsBuildBlocks today={today} />
    </article>
  );
}
