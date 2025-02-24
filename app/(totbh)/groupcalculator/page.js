"use client";

import { useState } from "react";

export default function GroupCalculator() {
  const [n, setN] = useState();
  const [maxGroupSize, setMaxGroupSize] = useState();
  const [minGroupSize, setMinGroupSize] = useState();

  let groupsOfMax = Math.floor(n / maxGroupSize); // Maximize groups of max size
  let remainder = n % maxGroupSize;
  let groupsOfMin = 0;

  while (remainder > 0 && remainder < minGroupSize && groupsOfMax > 0) {
    // Keep adjusting by converting max groups into smaller groups until remainder is usable
    console.log("loop 1", remainder, maxGroupSize);
    groupsOfMax--;
    remainder = remainder + maxGroupSize;
    console.log("loop 2", remainder, maxGroupSize);
  }

  while (remainder >= minGroupSize) {
    remainder -= minGroupSize;
    groupsOfMin++;
  }

  return (
    <>
      <form>
        <h1> Our Form </h1>
        <p>
          <label htmlFor="participants">Participants</label>
          <input
            type="text"
            name="participants"
            id="participants"
            value={n}
            onChange={(e) => setN(parseInt(e.target.value))}
          />
        </p>

        <p>
          <label htmlFor="maxGroup">Max Group Size</label>
          <input
            type="text"
            name="maxGroup"
            id="maxGroup"
            value={maxGroupSize}
            onChange={(e) => {
              setMaxGroupSize(parseInt(e.target.value));
              setMinGroupSize(parseInt(e.target.value - 1));
            }}
          />
        </p>
      </form>
      <p>
        <strong>Groups of {maxGroupSize} - </strong> {groupsOfMax}
      </p>
      <p>
        <strong>Groups of {minGroupSize} - </strong> {groupsOfMin}
      </p>
    </>
  );
}
