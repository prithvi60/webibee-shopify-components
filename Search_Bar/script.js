const inputEl = document.querySelector("#inputEl");
const btn = document.querySelector(".search_btn")

btn.addEventListener("click",function(){
    inputEl.value = "";
})