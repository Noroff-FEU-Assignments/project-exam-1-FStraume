const apiAllPostUrl = "https://straume.online/thepowderchase/wp-json/wp/v2/posts?_embed";
const postContainer = document.querySelector(".allpost-view")


async function getAllPosts (url) {
    const response = await fetch(url);
    const allPosts = await response.json()
    
    allPosts.forEach(function(post) {
        postContainer.innerHTML += `
        <div class="allposts">
        <div class="allposts-outer">
        <div class="allposts-inner">
        <a href="post.html?id=${post.id}" class="postTitle">${post.title.rendered}</a>
        <img src="${post._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}" class="postImg"></img>
        </div>
        </div>
        </div>`

    });
}

getAllPosts(apiAllPostUrl)