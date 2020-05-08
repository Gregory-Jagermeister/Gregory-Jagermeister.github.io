
import * as views from "./views.js"

function windowLoad() {
    fetch("./articles.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        views.displayArticle("content", data)
    })

}

window.onload = function(){
    windowLoad();
}