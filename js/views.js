
export { displayArticle }

function applyTemplate(targetid, templateid, data) {
    let target = document.getElementById(targetid);

    let template = Handlebars.compile(document.getElementById(templateid).textContent)
    console.log(data)
    target.innerHTML = template(data);
}

function displayArticle(targetid, data) {
    applyTemplate(targetid, "article-content", data)
}