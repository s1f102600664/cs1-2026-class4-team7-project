// function pagination1() {
   
// }

function pagination2() {
    document.getElementById("article_picture1").src = "images/20260606_tamanegi_5.jpg";
    document.getElementById("article_link1").innerHTML = "記事8";
    document.getElementById("article_link1").href = "article8.html";
    document.getElementById("brief1").innerHTML = "8";

    document.getElementById("article_picture2").src = "images/20260609_tamanegi_1.jpg";
    document.getElementById("article_link2").innerHTML = "記事9";
    document.getElementById("article_link2").href = "article9.html";
    document.getElementById("brief2").innerHTML = "9";

    document.getElementById("article_picture3").src = "images/20260611_tamanegi_2.jpg";
    document.getElementById("article_link3").innerHTML = "記事10";
    document.getElementById("article_link3").href = "article10.html";
    document.getElementById("brief3").innerHTML = "10";

    document.getElementById("article_picture4").src = "images/20260617_tamanegi_1.jpg";
    document.getElementById("article_link4").innerHTML = "記事11";
    document.getElementById("article_link4").href = "article11.html";
    document.getElementById("brief4").innerHTML = "11";

    document.getElementById("article_picture5").src = "images/20260619_tamanegi_5.jpg";
    document.getElementById("article_link5").innerHTML = "記事12";
    document.getElementById("article_link5").href = "article12.html";
    document.getElementById("brief5").innerHTML = "12";

    document.getElementById("article_picture6").src = "images/20260625_tamanegi_4.jpg";
    document.getElementById("article_link6").innerHTML = "記事13";
    document.getElementById("article_link6").href = "article13.html";
    document.getElementById("brief6").innerHTML = "13";

    document.getElementById("article_picture7").src = "images/tamanegi2.jpg";
    document.getElementById("article_link7").innerHTML = "記事14";
    document.getElementById("article_link7").href = "article14.html";
    document.getElementById("brief7").innerHTML = "14";
}


let e = document.querySelector("div.row_article");
// row_articleというクラス名を持つ最初のdiv要素を取得
let s = document.getElementById("change_button2");
// buttonの読み込み
s.addEventListener("click", () => {e.classList.replace("row_article", "article_jump");}); 
// s(2のbutton)がクリックされるとeのクラス名をrow_articleからarticle_jumpに変更

e.addEventListener("animationend", () => {e.classList.replace("article_jump", "row_article");}); 
e.addEventListener("animationcancel", () => {e.classList.replace("article_jump", "row_article");}); 
// ↑上2つはアニメーションが終わったらもしくはキャンセルでもとのクラスrow_articleに戻る