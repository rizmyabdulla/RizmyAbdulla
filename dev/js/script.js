const aboutBtn = document.getElementById("navBtn1");
const skillsBtn = document.getElementById("navBtn2");
const worksBtn = document.getElementById("navBtn3");
const contactBtn = document.getElementById("navBtn4");

aboutBtn.addEventListener("click", () => {
  location.href = "#about";
});
skillsBtn.addEventListener("click", () => {
  location.href = "#skills";
});
worksBtn.addEventListener("click", () => {
  location.href = "#works";
});
contactBtn.addEventListener("click", () => {
  location.href = "#contact";
});
