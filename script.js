const panels = document.querySelectorAll(".tu");

panels.forEach((tu) => {
  tu.addEventListener("click", () => {
    removeActiveClasses();
    tu.classList.add("kaishi");
  });
});

function removeActiveClasses() {
  panels.forEach((tu) => {
    tu.classList.remove("kaishi");
  });
}
