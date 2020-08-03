const TeamName = "Equifox";

const teamName = document.querySelectorAll("[data-team]");
teamName.forEach((name) => {
  name.innerHTML = TeamName;
});
