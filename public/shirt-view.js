const shirtViews = {
  front: {
    alt: "Illustration of the unmarked front of a plain white T-shirt",
    label: "01 / Front",
    src: "assets/white-shirt.svg",
  },
  back: {
    alt: "Illustration of the unmarked back of a plain white T-shirt",
    label: "02 / Back",
    src: "assets/white-shirt-back.svg",
  },
};

document.querySelectorAll("[data-shirt-viewer]").forEach((viewer) => {
  const image = viewer.querySelector("[data-shirt-view-image]");
  const label = viewer.querySelector("[data-shirt-view-label]");
  const buttons = viewer.querySelectorAll("[data-shirt-view]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const viewName = button.dataset.shirtView;
      const view = shirtViews[viewName];

      if (!view || !image || !label) return;

      image.src = view.src;
      image.alt = view.alt;
      label.textContent = view.label;
      viewer.dataset.currentView = viewName;

      buttons.forEach((viewButton) => {
        viewButton.setAttribute("aria-pressed", String(viewButton === button));
      });
    });
  });
});
