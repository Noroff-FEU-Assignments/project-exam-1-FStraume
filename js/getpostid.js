const articleView = document.getElementById("spesificPost")

//---------------------------Display Item-----------------------------------------//

const queryString = document.location.search;

const parameters = new URLSearchParams(queryString);

const idParameter = parameters.get("id");
console.log(idParameter)
const url = "https://straume.online/thepowderchase/wp-json/wp/v2/posts/" + idParameter + "?_embed"

const spesificId = idParameter;

async function fetchPost(spesificPost) {

    try {
        const response = await fetch(url);
        const spesificId = await response.json(); 

        console.log(spesificId)
        createHTML(spesificId)
    } catch (error) {
        articleView.innerHTML = `
        <div class="errorApiHandle">
        <h2>Sorry!</h2>
        <p>Could not retrive the post...<p>
        <p class="errorApiMessage">${error}</p>
        </div>` 
    }



}

fetchPost()

function createHTML(spesificId) {
   articleView.innerHTML += `
    <div class="spesificPost">
    <h1>${spesificId.title.rendered}</h1>
    <img src="${spesificId._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url}"></img>
    <div class="textContainer">${spesificId.content.rendered}</div>
    <p class="info">Created by: ${spesificId._embedded.author[0].name}</p>
    <p class="info">Last modified: ${spesificId.modified}</p>
    </div>`
   document.title = `${spesificId.title.rendered}`
}
