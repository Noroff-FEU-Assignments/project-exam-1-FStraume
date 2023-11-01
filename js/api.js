const url = "https://straume.online/thepowderchase/wp-json/wp/v2/posts";
const container = document.querySelector(".ap-1")

async function getPost (url) {
    const response = await fetch(url);
    const posts = await response.json()
    
    console.log(posts)
    posts.forEach(function(post) {

        console.log(post.content.rendered)
        container.innerHTML += `
        <div class="ap-1-display">
        <h3>${post.title.rendered}</h3>
        <p>${post.content.rendered}</p>
        </div>`
        console.log()


    });

}

getPost(url);

/* HUSK HEADLESS MODE */