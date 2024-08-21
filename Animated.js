var typed = new Typed("#auto-input", {
    strings: ["Create a Website", "Upload a Sermon", "Create a Blog Post", "Get Social", "Collect Donations", "Create a Shop", "Upload a Photo", "Create an Event", "Start a Discussion", "Create a Page"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true
})

let hideNavbar = document.querySelector("nav .navbar");

document.addEventListener("scroll", () => {
    const main = document.querySelector(".main")
    if(window.scrollY >= 800) {
        hideNavbar.style.zIndex = "999";
    }else {
        hideNavbar.style.zIndex = "-1";
    }
})



let deleteFooter = document.querySelector(".footer");

document.addEventListener("scroll", () => {
    const main = document.querySelector(".main")
    if(window.scrollY >= 3100) {
        deleteFooter.style.display = "block";
    }else {
        deleteFooter.style.display = "none";
    }
})