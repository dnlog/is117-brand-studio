"use strict";

(() => {
  const form = document.querySelector("#product-form");
  if (!form) return;

  const sizeError = document.querySelector("#size-error");
  const bagCount = document.querySelector("#bag-count");
  const bagStatus = document.querySelector("#bag-status");
  const bagSummary = document.querySelector("#bag-summary");
  const bagItems = document.querySelector("#bag-items");
  const clearBag = document.querySelector("#clear-bag");
  const styleGoal = document.querySelector("#style-goal");
  const styleGoalResult = document.querySelector("#style-goal-result");
  const styleGoalCopy = document.querySelector("#style-goal-copy");
  const sizes = ["S", "M", "L", "XL"];
  const bag = [];
  let statusTimer;

  const styleSuggestions = {
    "low-key":
      "Keep the rest of the outfit simple with muted colors and an easy layer.",
    polished:
      "Try dark trousers and a simple belt for a slightly more polished look.",
  };

  styleGoal?.addEventListener("change", () => {
    const selected = styleGoal.querySelector(
      'input[name="style-goal"]:checked',
    );
    const suggestion = selected && styleSuggestions[selected.value];
    if (!suggestion || !styleGoalCopy || !styleGoalResult) return;

    styleGoalCopy.textContent = suggestion;
    styleGoalResult.hidden = false;
  });

  const announceBagStatus = (message) => {
    window.clearTimeout(statusTimer);
    bagStatus.textContent = message;
    bagStatus.hidden = false;
    statusTimer = window.setTimeout(() => {
      bagStatus.hidden = true;
    }, 5000);
  };

  const renderBag = () => {
    bagCount.textContent = String(bag.length);
    clearBag.disabled = bag.length === 0;
    const itemWord = bag.length === 1 ? "item" : "items";
    bagSummary.textContent = bag.length
      ? `Your demo bag has ${bag.length} ${itemWord}.`
      : "Your demo bag is empty. Choose a size to try it.";
    bagItems.replaceChildren();
    sizes.forEach((size) => {
      const quantity = bag.filter((item) => item === size).length;
      if (!quantity) return;
      const item = document.createElement("li");
      item.textContent = `White T-shirt · Size ${size} · Quantity ${quantity}`;
      bagItems.append(item);
    });
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    window.clearTimeout(statusTimer);
    bagStatus.hidden = true;
    const selected = form.querySelector('input[name="size"]:checked');
    if (!selected || !sizes.includes(selected.value)) {
      sizeError.hidden = false;
      form.querySelectorAll('input[name="size"]').forEach((input) => {
        input.setAttribute("aria-invalid", "true");
      });
      form.querySelector('input[name="size"]').focus();
      return;
    }

    sizeError.hidden = true;
    bag.push(selected.value);
    renderBag();
    const itemWord = bag.length === 1 ? "item" : "items";
    announceBagStatus(
      `Added a white T-shirt in size ${selected.value}. Your demo bag has ${bag.length} ${itemWord}.`,
    );
  });

  form.addEventListener("change", () => {
    sizeError.hidden = true;
    form.querySelectorAll('input[name="size"]').forEach((input) => {
      input.removeAttribute("aria-invalid");
    });
  });

  clearBag.addEventListener("click", () => {
    bag.length = 0;
    renderBag();
    announceBagStatus("Your demo bag is empty. Choose a size to try it again.");
    form.querySelector('input[name="size"]:checked')?.focus();
  });
})();
