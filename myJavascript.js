const slide = document.querySelector(".slider-bar")
const objSlide = [{
        "heading": "chicago",
        "img": "chicago.jpg",
        "title": "Thank you, Chicago - A night we won't forget."
    },
    {
        "heading": "los angeles",
        "img": "la.jpg",
        "title": "We had the best time playing at Venice Beach!"
    },
    {
        "heading": "new york",
        "img": "ny.jpg",
        "title": "The atmosphere in New York is lorem ipsum."

    }
]

function slideBar() {
    const head = slide.querySelector("h3").textContent.toLowerCase();
    for (var x in objSlide) {
        if (objSlide[x].heading === head) {
            return (1 + parseInt(x) == objSlide.length) ? 0 : 1 + parseInt(x)
        }
    }
}
//slide 
function test() {
    setInterval(() => {
        var index = slideBar();
        var str = `<img src="./img/${objSlide[index].img}" alt="" style="width:100%">
    <div class="slider-heading">
        <h3 class="">${objSlide[index].heading}</h3>
        <span>${objSlide[index].title}</span>
    </div>`

        slide.innerHTML = str;
    }, 4000)
}
test()
    // navbar
const menu = document.getElementById("bar-menu");
const header = document.querySelector(".nav-header");
const height = header.clientHeight;
const liElement = document.querySelectorAll(".nav-list>li");
var checkBar = false;
menu.onclick = function() {
    menu.parentElement.backgroundColor = "#ccc";
    if (header.clientHeight == height) {
        header.style.height = 'auto';
        checkBar = true;

    } else {
        header.style.height = null;
    }
}

if (checkBar) {
    menu.style.color = "#000";
} else {
    menu.style.color = "#fff";
}

liElement.forEach((element, index) => {
        element.onclick = function() {
            header.style.height = null;
        }
    })
    //  click vào btn will show form
const formPay = document.querySelector(".form-pay");
const card = document.querySelectorAll(".card-ticket>button");
card.forEach((element) => {
        element.onclick = function() {
            formPay.style.display = "block"
        }
    })
    // exit form
const exit = document.querySelectorAll(".exit");
formPay.addEventListener("click", e => {
    if (e.target === e.currentTarget) {
        e.target.style.display = "none"
    }
})

exit.forEach((element) => {
    element.onclick = function() {
        formPay.style.display = "none"
    }
})