import styles from "./paymentsbuildblocks.module.css";

const payments = [
  { number: "60", payDate: "2021-09-30" },
  { number: "59", payDate: "2021-10-31" },
  { number: "58", payDate: "2021-11-30" },
  { number: "57", payDate: "2021-12-31" },
  { number: "56", payDate: "2022-01-31" },
  { number: "55", payDate: "2022-02-28" },
  { number: "54", payDate: "2022-03-31" },
  { number: "53", payDate: "2022-04-30" },
  { number: "52", payDate: "2022-05-31" },
  { number: "51", payDate: "2022-06-30" },
  { number: "50", payDate: "2022-07-31" },
  { number: "49", payDate: "2022-08-31" },
  { number: "48", payDate: "2022-09-30" },
  { number: "47", payDate: "2022-10-31" },
  { number: "46", payDate: "2022-11-30" },
  { number: "45", payDate: "2022-12-31" },
  { number: "44", payDate: "2023-01-31" },
  { number: "43", payDate: "2023-02-28" },
  { number: "42", payDate: "2023-03-31" },
  { number: "41", payDate: "2023-04-30" },
  { number: "40", payDate: "2023-05-31" },
  { number: "39", payDate: "2023-06-30" },
  { number: "38", payDate: "2023-07-31" },
  { number: "37", payDate: "2023-08-31" },
  { number: "36", payDate: "2023-09-30" },
  { number: "35", payDate: "2023-10-31" },
  { number: "34", payDate: "2023-11-30" },
  { number: "33", payDate: "2023-12-31" },
  { number: "32", payDate: "2024-01-31" },
  { number: "31", payDate: "2024-02-29" },
  { number: "30", payDate: "2024-03-31" },
  { number: "29", payDate: "2024-04-30" },
  { number: "28", payDate: "2024-05-31" },
  { number: "27", payDate: "2024-06-30" },
  { number: "26", payDate: "2024-07-31" },
  { number: "25", payDate: "2024-08-31" },
  { number: "24", payDate: "2024-09-30" },
  { number: "23", payDate: "2024-10-31" },
  { number: "22", payDate: "2024-11-30" },
  { number: "21", payDate: "2024-12-31" },
  { number: "20", payDate: "2025-01-31" },
  { number: "19", payDate: "2025-02-28" },
  { number: "18", payDate: "2025-03-31" },
  { number: "17", payDate: "2025-04-30" },
  { number: "16", payDate: "2025-05-31" },
  { number: "15", payDate: "2025-06-30" },
  { number: "14", payDate: "2025-07-31" },
  { number: "13", payDate: "2025-08-31" },
  { number: "12", payDate: "2025-09-30" },
  { number: "11", payDate: "2025-10-31" },
  { number: "10", payDate: "2025-11-30" },
  { number: "9", payDate: "2025-12-31" },
  { number: "8", payDate: "2026-01-31" },
  { number: "7", payDate: "2026-02-28" },
  { number: "6", payDate: "2026-03-31" },
  { number: "5", payDate: "2026-04-30" },
  { number: "4", payDate: "2026-05-31" },
  { number: "3", payDate: "2026-06-30" },
  { number: "2", payDate: "2026-07-31" },
  { number: "1", payDate: "2026-08-31" },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const styleClassses = {
  2021: styles.c2021,
  2022: styles.c2022,
  2023: styles.c2023,
  2024: styles.c2024,
  2025: styles.c2025,
  2026: styles.c2026,
};

export function PaymentsBuildBlocks({ today }) {
  const result = payments.map((x) => {
    const d = new Date(x.payDate);
    const n = new Date(today);

    if (d > n) {
      return (
        <section
          id={x.number}
          key={x.number}
          className={`${styles.section} ${styleClassses[d.getFullYear()]}`}
        >
          <div>{x.number}</div>
          <div className={`${styles.date}`}>
            {months[d.getMonth()]} {d.getFullYear()}
          </div>
        </section>
      );
    } else {
      return (
        <section
          id={x.number}
          key={x.number}
          className={`${styles.section}  ${styleClassses[d.getFullYear()]}`}
        >
          <div className={`${styles.done}`}>&times;</div>
          <div className={`${styles.date}`}>
            {months[d.getMonth()]} {d.getFullYear()}
          </div>
        </section>
      );
    }
  });

  return result;
}
