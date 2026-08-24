import { Temporal } from "@js-temporal/polyfill";

export const getDates = (month, year) =>
  Array.from(
    {
      length: Temporal.PlainDate.from({
        year: year,
        month: month,
        day: 1,
      }).daysInMonth,
    },
    (_, i) =>
      Temporal.PlainDate.from({
        year: year,
        month: month,
        day: i + 1,
      }).toLocaleString("en-IE", {
        dateStyle: "medium",
      }),
  );
