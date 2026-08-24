import { Temporal } from "@js-temporal/polyfill";

export default function TweetDateTime({ dateString }) {
  const date = Temporal.PlainDateTime.from(dateString).toLocaleString("en-IE", {
    dateStyle: "medium",
    timeStyle: "full",
  });
  return <time dateTime={dateString}>{date}</time>;
}
