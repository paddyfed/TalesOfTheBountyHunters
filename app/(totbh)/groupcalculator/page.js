"use client";

import { useState } from "react";

export default function GroupCalculator() {
  const [n, setN] = useState(18);
  const [maxGroupSize, setMaxGroupSize] = useState(5);
  const [minGroupSize, setMinGroupSize] = useState(4);

  let groupsOfMax = Math.floor(n / maxGroupSize); // Maximize groups of max size
  let remainder = n % maxGroupSize;

  if (remainder < minGroupSize && remainder > 0) {
    // Adjust by converting one max group into smaller groups
    groupsOfMax--;
    remainder += maxGroupSize;
  }

  let groupsOfMin =
    remainder >= minGroupSize ? Math.floor(remainder / minGroupSize) : 0;

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
            onChange={(e) => setN(e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="maxGroup">Max Group Size</label>
          <input
            type="text"
            name="maxGroup"
            id="maxGroup"
            value={maxGroupSize}
            onChange={(e) => setMaxGroupSize(parseInt(e.target.value))}
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
