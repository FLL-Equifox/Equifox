// window.addEventListener("load", () => {
//   alert("load");
//   const button = document.querySelectorAll("a.solo");
//   button.addEventListener("click", () => {
//     console.log("clicked");
//     alert("hello");
//   });
// });

const TeamName = "Equifox";

show = function () {
  alert("Website Created with skills learned from this amazing website");
};
const teamName = document.querySelectorAll("[data-team]");
teamName.forEach((name) => {
  name.innerHTML = TeamName;
});
