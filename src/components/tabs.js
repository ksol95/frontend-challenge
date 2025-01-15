export const selectTab = (targetButton, navButtons, tabs) => {
  if (!targetButton.classList.contains("active")) {
    const targetTabId = targetButton.getAttribute("data-tab");

    navButtons.forEach((button) =>
      button == targetButton
        ? button.classList.add("active")
        : button.classList.remove("active")
    );
    tabs.forEach((tab) =>
      tab.id == targetTabId
        ? tab.classList.add("active")
        : tab.classList.remove("active")
    );
  }
};
