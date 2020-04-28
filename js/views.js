
export { displayArticle }

function applyTemplate(targetid, templateid, data) {
    let target = document.getElementById(targetid);

    let template = Handlebars.compile(
                        document.getElementById(templateid).textContent
                    )
    target.innerHTML = template(data);
}

function displayArticle(targetid, data) {
    applyTemplate(targetid, "article-content", {articles: data})
}