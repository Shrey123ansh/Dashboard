import React from "react";
import HighlightCard from "./HighlightCard";
import { highlightsData } from "../../assets/data/highlights";


export default function Highlights() {
  return (
    <>
      <HighlightCard
        tedx={highlightsData.filter((event) => {
          return event.category === "talks";
        })}
      />
      <HighlightCard
        tedx={highlightsData.filter((event) => {
          return event.category === "circles";
        })}
      />
      <HighlightCard
        tedx={highlightsData.filter((event) => {
          return event.category === "stories";
        })}
      />
    </>
  );
}
