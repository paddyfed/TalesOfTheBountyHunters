// import { parseISO, format } from "date-fns";
import { Temporal } from "@js-temporal/polyfill";

export default function DisplayDate({ dateString }) {
  if (dateString === null) return null;
  const time = Temporal.PlainDate.from(dateString);
  const formatter = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  // console.log(time.toLocaleString());
  // const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {time.toLocaleString("en-IE", {
        dateStyle: "medium",
      })}
    </time>
  );
}
