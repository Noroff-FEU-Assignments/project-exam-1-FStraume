/*const url = "https://straume.online/ThePowderChase/wp-json/wp/v2/posts?_embed";
const container = document.querySelector(".ap-1")

async function getPost (url) {
    const response = await fetch(url);
    const posts = await response.json()
    
    console.log(posts)
    posts.forEach(function(post) {
        container.innerHTML += `
        <div class="ap-1-display">
        <h3>${post.title.rendered}</h3>
        </div>`
        console.log()
    });

}

getPost(url);

const urlMedia = "https://straume.online/ThePowderChase/wp-json/wp/v2/media";
const mediaContainer = document.querySelector(".ap-1")

async function getMedia (urlMedia) {
    const response = await fetch(urlMedia);
    const media = await response.json()
    
    console.log(media)
    media.forEach(function(image) {        
    container.innerHTML += `
    <div class="ap-1-display">
    <img src="${image.guid.rendered}" alt="Picture of the rain jacket" class="imgsize"/></a>
    </div>`
        console.log(image.guid.rendered)
    });

}

getMedia(urlMedia); */

