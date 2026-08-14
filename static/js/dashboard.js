const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;

function showSlide(){
    slides.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener("click",()=>{
    index++;
    if(index>=images.length){
        index=0;
    }
    showSlide();
});

prev.addEventListener("click",()=>{
    index--;
    if(index<0){
        index=images.length-1;
    }
    showSlide();
});

setInterval(()=>{
    index++;
    if(index>=images.length){
        index=0;
    }
    showSlide();
},4000);


const emailBtn = document.querySelector(".floating-btn.email");

if (emailBtn) {
    const mobile = window.matchMedia("(pointer: coarse)").matches;
    if (mobile) {
        emailBtn.href =
            "mailto:cerraajerosbogotanorte@gmail.com?subject=Solicitud%20de%20servicio";
    } else {
        emailBtn.href =
            "https://mail.google.com/mail/?view=cm&fs=1&to=cerraajerosbogotanorte@gmail.com&su=Solicitud%20de%20servicio";
        emailBtn.target = "_blank";
    }
}