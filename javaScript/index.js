// function pagination1() {
   
// }

function pagination2() {
    document.getElementById("article_picture1").src = "images/20260606_tamanegi_5.jpg";
    document.getElementById("article_link1").innerHTML = "記事8";
    document.getElementById("article_link1").href = "article8.html";
    document.getElementById("brief1").innerHTML = "8";
}


const e = document.getElementById("show_article");
const s = document.getElementById("change_button2");
s.addEventListener("click", () => {e.classList.add("_jump");}); 
s.addEventListener("animationed", () => {e.classList.remove("_jump");}); 
s.addEventListener("animationcancel", () => {e.classList.remove("_jump");}); 
