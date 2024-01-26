let cat_imgs = [
    "./assets/cat1.jpg",
    "./assets/cat2.jpg",
    "./assets/cat3.jpg",
    "./assets/cat4.jpg",
    "./assets/cat5.jpg",
    "./assets/cat6.jpg",
    "./assets/cat7.jpg",
    "./assets/cat8.jpg",
    "./assets/cat9.jpg",
    "./assets/cat10.jpg",
    "./assets/cat11.jpg",
    "./assets/cat12.jpg",
    "./assets/cat13.jpg",
    "./assets/cat14.jpg",
    "./assets/cat15.jpg",
    "./assets/cat16.jpg",
    "./assets/cat17.jpg",
    "./assets/cat18.jpg",
    "./assets/cat19.jpg",
    "./assets/cat20.jpg",
    "./assets/cat21.jpg",
    "./assets/cat22.jpg",
    "./assets/cat23.jpg"
]


var root = document.getElementById("root")

var count = 3
if (window.innerWidth > 992 && window.innerWidth <= 1200){
    count = 4
} else if (window.innerWidth > 768 && window.innerWidth <= 992){
    count = 5
} else if(window.innerWidth > 576 && window.innerWidth <= 768){
    count = 6
} else if(window.innerWidth <= 576 ){
    count = 8
} 

const pattern_1 = () => {
    let result = ""

    for (let i = 0; i < count; i++){
        if (i % 2 == 0){
            result += 
            `<div class="slider r_to_l slider_1">
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
            result += 
            `<div class="slider l_to_r slider_1">
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

    return result
}

const pattern_2 = () => {
    let result = ""
        
    for (let i = 0; i < count*3; i++){
        if (i % 2 == 0){
            result +=
            `<div class="slider r_to_l slider_2">
                <div class="slider_inner slider_inner_2">
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
                <div class="slider_inner slider_inner_2">
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
            result += 
            `<div class="slider l_to_r slider_2">
                <div class="slider_inner slider_inner_2">
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
                <div class="slider_inner slider_inner_2">
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

    return result
}


root.innerHTML += 
    `
        <div class="pattern_1">
            ${pattern_1()}
        </div>
        <div class="pattern_2">
            ${pattern_2()}
        </div>
    `