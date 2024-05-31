export const getDates = (month, year) =>
  Array.from({ length: new Date(year, month, 0).getDate() }, (_, i) =>
    new Date(year, month - 1, i + 1).toLocaleDateString(undefined, {
      dateStyle: "medium",
    })
  );
