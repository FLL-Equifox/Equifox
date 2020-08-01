const TeamName = "Equifox";

show = function () {
  alert("Website Created with skills learned from this amazing website");
};
const teamName = document.querySelectorAll("[data-team]");
teamName.forEach((name) => {
  name.innerHTML = TeamName;
});
