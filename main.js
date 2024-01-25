let cat_imgs = [
    "/assets/cat1.jpg",
    "/assets/cat2.jpg",
    "/assets/cat3.jpg",
    "/assets/cat4.jpg",
    "/assets/cat5.jpg",
    "/assets/cat6.jpg",
    "/assets/cat7.jpg",
    "/assets/cat8.jpg",
    "/assets/cat9.jpg",
    "/assets/cat10.jpg",
    "/assets/cat11.jpg",
    "/assets/cat12.jpg",
    "/assets/cat13.jpg",
    "/assets/cat14.jpg",
    "/assets/cat15.jpg",
    "/assets/cat16.jpg",
    "/assets/cat17.jpg",
    "/assets/cat18.jpg",
    "/assets/cat19.jpg",
    "/assets/cat20.jpg",
    "/assets/cat21.jpg",
    "/assets/cat22.jpg",
    "/assets/cat23.jpg"
]


var root = document.getElementById("root")

for (let i = 0; i < 100; i++){
    if (i % 2 == 0){
        root.innerHTML += 
        `<div class="slider r_to_l">
            <div class="slider_inner">
                <div>
                    <img src="${cat_imgs[Math.floor(Math.random() * cat_imgs.length)]}" alt="">
                </div>
                <div>
                    <img src="${cat_imgs[Math.floor(Math.random() * cat_imgs.length)]}" alt="">
                </div>
                <div>
                    <img src="${cat_imgs[Math.floor(Math.random() * cat_imgs.length)]}" alt="">
                </div>
                <div>
                    <img src="${cat_imgs[Math.floor(Math.random() * cat_imgs.length)]}" alt="">
                </div>
                <div>
                    <img src="${cat_imgs[Math.floor(Math.random() * cat_imgs.length)]}" alt="">
                </div>
            </div>
            <div class="slider_inner">
                <div>
                    <img src="${cat_imgs[Math.floor(Math.random() * cat_imgs.length)]}" alt="">
                </div>
                <div>
                    <img src="${cat_imgs[Math.floor(Math.random() * cat_imgs.length)]}" alt="">
                </div>
                <div>
                    <img src="${cat_imgs[Math.floor(Math.random() * cat_imgs.length)]}" alt="">
                </div>
                <div>
                    <img src="${cat_imgs[Math.floor(Math.random() * cat_imgs.length)]}" alt="">
                </div>
                <div>
                    <img src="${cat_imgs[Math.floor(Math.random() * cat_imgs.length)]}" alt="">
                </div>
            </div>
        </div>`
    } else{
        root.innerHTML += 
        `<div class="slider l_to_r">
            <div class="slider_inner">
                <div>
                    <img src="${cat_imgs[Math.floor(Math.random() * cat_imgs.length)]}" alt="">
                </div>
                <div>
                    <img src="${cat_imgs[Math.floor(Math.random() * cat_imgs.length)]}" alt="">
                </div>
                <div>
                    <img src="${cat_imgs[Math.floor(Math.random() * cat_imgs.length)]}" alt="">
                </div>
                <div>
                    <img src="${cat_imgs[Math.floor(Math.random() * cat_imgs.length)]}" alt="">
                </div>
                <div>
                    <img src="${cat_imgs[Math.floor(Math.random() * cat_imgs.length)]}" alt="">
                </div>
            </div>
            <div class="slider_inner">
                <div>
                    <img src="${cat_imgs[Math.floor(Math.random() * cat_imgs.length)]}" alt="">
                </div>
                <div>
                    <img src="${cat_imgs[Math.floor(Math.random() * cat_imgs.length)]}" alt="">
                </div>
                <div>
                    <img src="${cat_imgs[Math.floor(Math.random() * cat_imgs.length)]}" alt="">
                </div>
                <div>
                    <img src="${cat_imgs[Math.floor(Math.random() * cat_imgs.length)]}" alt="">
                </div>
                <div>
                    <img src="${cat_imgs[Math.floor(Math.random() * cat_imgs.length)]}" alt="">
                </div>
            </div>
        </div>`
    }
}
