"use client";

import { useSearchParams } from "next/navigation";

export default function GroupCalculator() {
  const searchParams = useSearchParams();

  const n = searchParams.get("participants") ?? 18;
  const maxGroupSize = searchParams.get("maxGroup") ?? 5;
  const minGroupSize = searchParams.get("maxGroup") - 1 ?? 4;
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
      Groups of {maxGroupSize}: {groupsOfMax}, Groups of {minGroupSize}:{" "}
      {groupsOfMin}
    </>
  );
}
