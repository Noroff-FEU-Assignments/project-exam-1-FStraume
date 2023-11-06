const apiAllPostUrl = "https://straume.online/thepowderchase/wp-json/wp/v2/posts?_embed";
const postContainer = document.querySelector(".allpost-view")


async function getAllPosts (url) {
    const response = await fetch(url);
    const allPosts = await response.json()
    
    console.log(allPosts)

    allPosts.forEach(function(post) {
        postContainer.innerHTML += `
        <div class="allposts">
        <h2 class="postTitle">${post.title.rendered}</h2>
        <img src="${post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" class="postImg"></img>
        <div class="info">
        <p>Created by: ${post._embedded.author[0].name}</p>
        <p>Last modified: ${post.modified}</p>
        </div>
        </div>`

    });

}

getAllPosts(apiAllPostUrl)