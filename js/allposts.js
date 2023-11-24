const apiAllPostUrl = "https://straume.online/thepowderchase/wp-json/wp/v2/posts?per_page=10&_embed";
const postContainer = document.querySelector(".allpost-view")
const showMore = document.getElementById("showMore")


async function getAllPosts (url) {
    const response = await fetch(url);
    const allPosts = await response.json()



    allPosts.forEach(function(post) {
        try {
            console.log(post)
            if (window.innerWidth < 600) {
                postContainer.innerHTML += `
                <div class="allposts">
                <div class="allposts-outer">
                <div class="allposts-inner">
                <a href="post.html?id=${post.id}" class="postTitle allpost-text">${post.title.rendered}</a>
                <img src="${post._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}" class="postImg" onclick="getModal(this)"></img>
                </div>
                </div>
                </div>`
            } else if (window.innerWidth > 601) {
                postContainer.innerHTML += `
                <div class="allposts">
                <div class="allposts-outer">
                <div class="allposts-inner">
                <a href="post.html?id=${post.id}" class="postTitle allpost-text">${post.title.rendered}</a>
                <img src="${post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" class="postImg" onclick="getModal(this)"></img>
                </div>
                </div>
                </div>`
            }
        } catch (error) {
            postContainer.innerHTML = `
                <div class="errorApiHandle">
                <h2>Sorry!</h2>
                <p>Could not retrive the posts...<p>
                <p class="errorApiMessage">${error}</p>
                </div>` 
        }

    });
}

getAllPosts(apiAllPostUrl)

showMore.onclick = function() {
    const newUrl =  "https://straume.online/thepowderchase/wp-json/wp/v2/posts?per_page=20&_embed";
    postContainer.innerHTML = "";
    showMore.style.display = "none"
    getAllPosts(newUrl);
    console.log(newUrl)
  } 