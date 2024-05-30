import { PaymentsBuildBlocks } from "../components/PaymentsBuildBlocks";
import styles from "../components/paymentsbuildblocks.module.css";

export const metadata = {
  title: "Payments Left",
};

export default function PaymentsLeft() {
  return (
    <article className={styles.main}>
      <PaymentsBuildBlocks />
    </article>
  );
}
