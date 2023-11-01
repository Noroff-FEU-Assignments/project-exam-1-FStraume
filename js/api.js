const url = "https://straume.online/thepowderchase/wp-json/wp/v2/posts";
const container = document.querySelector(".ap-1")
const latestcontainer = document.querySelector(".fp-1-slider")

async function getPost (url) {
    const response = await fetch(url);
    const posts = await response.json()
    
    posts.forEach(function(post) {

        container.innerHTML += `
        <div class="ap-1-display">
        <h3>${post.title.rendered}</h3>
        <p>${post.content.rendered}</p>
        </div>`

        latestcontainer.innerHTML += `
        <div class="slide">
        <h3>${post.title.rendered}</h3>
        </div>`

    });

    /* Inspiration for carousel, from https://blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/ */

    const slides = document.querySelectorAll(".slide");
    const nextSlide = document.querySelector(".btn-next");
    
    
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${i * 100}%)`;
    });
    
    let curSlide = 0;
    let maxSlide = slides.length;
    
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

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
});
    
}

getPost(url);


