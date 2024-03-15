const headEl = document.querySelector("#accHead");
const bodyEl = document.querySelector(".bodyWrapper");
const iconEl = document.querySelector("#icon");
const containerEl = document.querySelector("#wrapper");

containerEl.addEventListener("click", () => {
  if (iconEl.classList.contains("active")) {
    iconEl.classList.remove("active");
    bodyEl.style.maxHeight = null;
  } else {
    iconEl.classList.add("active");
    bodyEl.style.maxHeight = bodyEl.scrollHeight + "px";
  }
});
