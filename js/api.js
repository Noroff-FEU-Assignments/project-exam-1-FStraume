const apiUrl = "https://straume.online/thepowderchase/wp-json/wp/v2/posts?_embed";
const container = document.querySelector(".ap-1")
const latestcontainer = document.querySelector(".fp-1-slider")

async function getPosts (url) {
    const response = await fetch(url);
    const posts = await response.json()
    
    console.log(posts)
    posts.forEach(function(post) {
        container.innerHTML += `
        <div class="ap-1-display">
        <a href="post.html?id=${post.id}" class="postTitle">${post.title.rendered}</a>
        <img src="${post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" class="postImg"></img>
        </div>`

        latestcontainer.innerHTML += `
        <div class="slide">
        <a href="post.html?id=${post.id}" class="postTitle">${post.title.rendered}</a>
        <img src="${post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" alt="${post._embedded["wp:featuredmedia"][0].alt_text}" class="postImg"></img>
        </div>`

    });

    /* Inspiration for carousel, from https://blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/ */

    const slides = document.querySelectorAll(".slide");
    const nextSlide = document.querySelector(".btn-next");
    
    
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${i * 100}%)`;
    });
    
    let minSlide = 0;
    let curSlide = 0;
    let maxSlide = 5;
    
    nextSlide.addEventListener("click", function () {
        if (curSlide === maxSlide) {
            curSlide = 0;
          } else {
            curSlide++;
          }
    
        slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
      });
    });

    const prevSlide = document.querySelector(".btn-prev");


    prevSlide.addEventListener("click", function () {

      if (curSlide === maxSlide || curSlide === minSlide) {
        curSlide = 0;
          } else {
    curSlide--;
  }

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
});
    
}

getPosts(apiUrl);


