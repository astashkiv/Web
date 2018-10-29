'use strict'

let buttonAddNews = document.getElementById("addNews");
buttonAddNews.onclick = onClick;


function onClick() {

    let newsInput = document.getElementById("newsInput");
    let titleInput = document.getElementById("titleInput");

    if (newsInput.value == "" || titleInput.value == "") {
        alert("ЗАПОВНИ УСІ ПОЛЯ!")
    } else if (titleInput.value.length > 50) {
        alert("НІХТО НЕ ПРОЧИТАЄ ТАКИЙ ДОВГИЙ ЗАГОЛОВОК! ДАВАЙ КОРОТШЕ :)");
    } else {
        newsInput.value = "";
        titleInput.value = "";
    }
}
