import utilStyles from "../utils.module.css";
import DisplayDate from "../components/DisplayDate";
import Link from "next/link";

export const metadata = {
  title: "College",
};

export default async function College() {
  //   const postData = await getPostData("now");
  const allCollegeYears = [
    { slug: "lyit-first-year", linktext: "2000/2001 - LYIT First Year" },
    { slug: "lyit-second-year", linktext: "2001/2002 - LYIT Second Year" },
    { slug: "lyit-third-year", linktext: "2002/2003 - LYIT Third Year" },
    { slug: "lyit-fourth-year", linktext: "2003/2004 - LYIT Fourth Year" },
  ];

  return (
    <>
      <h1 className={utilStyles.headingXl}>Hi</h1>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Tags</h2>
        <ul className={`${utilStyles.list}`}>
          {allCollegeYears.map((item, index) => {
            return (
              <li key={index}>
                <Link href={`/college/${item.slug}`}>{item.linktext}</Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
