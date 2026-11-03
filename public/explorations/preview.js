"use strict";

(() => {
  const params = new URLSearchParams(window.location.search);
  const direction =
    params.get("direction") === "postmodernist" ? "postmodernist" : "modernist";
  const label =
    direction === "modernist"
      ? "Direction A / Modernist"
      : "Direction B / Postmodernist";
  document.body.dataset.direction = direction;
  document.querySelector("#direction-label").textContent = label;
  document.title = `Form — ${label}`;
})();
