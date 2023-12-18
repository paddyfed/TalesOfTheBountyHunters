import { parseISO, format } from "date-fns";

export default function TweetDateTime({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>{format(date, "h:mm a · LLLL d, yyyy")}</time>
  );
}
