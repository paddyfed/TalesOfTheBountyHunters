"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function GroupCalculator() {
  const searchParams = useSearchParams();

  const [n, setN] = useState(searchParams.get("participants") ?? 18);
  const [maxGroupSize, setMaxGroupSize] = useState(
    parseInt(searchParams.get("maxGroup")) ?? 5
  );
  const [minGroupSize, setMinGroupSize] = useState(
    parseInt(searchParams.get("maxGroup")) - 1 ?? 4
  );

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
        <label htmlFor="title">Participants</label>
        <input type="text" name="participants" id="participants" />

        <label htmlFor="body">Max Group Size</label>
        <input type="text" name="maxGroup" id="maxGroup" />
        <input type="submit" value="Submit" />
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
