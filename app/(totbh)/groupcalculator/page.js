"use client";

import { useState } from "react";

export default function GroupCalculator() {
  const [n, setN] = useState("");
  const [results, setResults] = useState([]);

  for (let maxGroupSize = 3; maxGroupSize <= 6; maxGroupSize++) {
    for (let minGroupSize = 2; minGroupSize <= 6; minGroupSize++) {
      if (minGroupSize < maxGroupSize) {
        let groupsOfMax = Math.floor(n / maxGroupSize); // Maximize groups of max size
        let remainder = n % maxGroupSize;
        let groupsOfMin = 0;

        while (remainder > 0 && remainder < minGroupSize && groupsOfMax > 0) {
          // Keep adjusting by converting max groups into smaller groups until remainder is usable
          groupsOfMax--;
          remainder = remainder + maxGroupSize;
        }

        while (remainder >= minGroupSize) {
          remainder -= minGroupSize;
          groupsOfMin++;
        }

        console.log(`Loop ${maxGroupSize} ${minGroupSize}`);
        console.log(`Groups of ${maxGroupSize} - ${groupsOfMax}`);
        console.log(`Groups of ${minGroupSize} - ${groupsOfMin}`);

        // setResults([
        //   ...results,
        //   `Groups of ${maxGroupSize} - ${groupsOfMax}`,
        //   `Groups of ${minGroupSize} - ${groupsOfMin}`,
        // ]);
        if (remainder == 0) {
          results.push(
            `Groups of ${maxGroupSize} - ${groupsOfMax} Groups of ${minGroupSize} - ${groupsOfMin} Remainder - ${remainder} `
          );
        }
      }
    }
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1> Our Form </h1>
        <p>
          <label htmlFor="participants">Participants</label>
          <input
            type="text"
            name="participants"
            id="participants"
            value={n}
            onChange={(e) => {
              setN(parseInt(e.target.value, 10) || 0);
              setResults([]);
            }}
          />
        </p>
      </form>

      <p>
        {n}{" "}
        {results.map((r, x) => {
          return (
            <b key={x}>
              {r}
              <br></br>
            </b>
          );
        })}
      </p>
      {/* <p>
        <strong>Groups of {maxGroupSize} - </strong> {groupsOfMax}
      </p>
      <p>
        <strong>Groups of {minGroupSize} - </strong> {groupsOfMin}
      </p> */}
    </>
  );
}
