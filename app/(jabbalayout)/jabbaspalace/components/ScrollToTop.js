"use client";
import jabbastyles from "../jabbastyles.module.css";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function ScrollToTop() {
  return (
    <button className={jabbastyles.backtotop} onClick={scrollToTop}>
      Back To Top
    </button>
  );
}
