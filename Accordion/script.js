const headEl = document.querySelector("#accHead");
const bodyEl = document.querySelector(".bodyWrapper");
const iconEl = document.querySelector("#icon");
const containerEl = document.querySelector("#wrapper");
const contentEl = document.querySelector(".content")
const contentTitle = document.querySelector(".content_title")

headEl.addEventListener("click", () => {
  if (iconEl.classList.contains("active")) {
    iconEl.classList.remove("active");
    bodyEl.style.maxHeight = null;
  } else {
    iconEl.classList.add("active");
    bodyEl.style.maxHeight = bodyEl.scrollHeight + "px";
  }
});

contentEl.addEventListener("click", ()=>{
  let checkBox = document.querySelector('input[type="checkbox"]');
  checkBox.checked = checkBox.checked ? false : true;
  // contentEl.classList.toggle("pending");
})