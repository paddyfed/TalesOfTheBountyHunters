// import { parseISO, format } from "date-fns";
import { Temporal } from "@js-temporal/polyfill";

export default function DisplayDate({ dateString }) {
  if (dateString === null) return null;
  const time = Temporal.PlainDate.from(dateString);
  return (
    <time dateTime={dateString}>
      {time.toLocaleString("en-IE", {
        dateStyle: "medium",
      })}
    </time>
  );
}
