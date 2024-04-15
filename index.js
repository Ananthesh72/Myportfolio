var typing=new Typed(".partical", {
    strings: ["I'm Ananthesh Shenoy", "I'm  Web developer", "I'm  Programmer", "I'm  Photographer", "I'm  Gammer"," :) "],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true, 

});

let tablinks = document.getElementsByClassName("tab-links")
let tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname)
{
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }    
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
   
}    

let sidemenu= document.getElementById("sidemenu")

function openmenu()
{
    sidemenu.style.right="0";
}    

function closemenu()
{
    sidemenu.style.right="-200px";
}    


const next=document.querySelector('#next')
const prev=document.querySelector('#prev')

function handleScrollNext (direction) {
  const cards = document.querySelector('.card-content')
  cards.scrollLeft=cards.scrollLeft += window.innerWidth / 2 > 600 ? window.innerWidth /2 : window.innerWidth -100
}

function handleScrollPrev (direction) {
  const cards = document.querySelector('.card-content')
  cards.scrollLeft=cards.scrollLeft -= window.innerWidth / 2 > 600 ? window.innerWidth /2 : window.innerWidth -100
}

next.addEventListener('click', handleScrollNext)
prev.addEventListener('click', handleScrollPrev)






// contact form


// (function(){
//     const fonts = ["cursive"];
//     let captchaValue = "";
//     function gencaptcha()
//     {
//         let value = btoa(Math.random()*1000000000);
//         value = value.substr(0,5 + Math.random()*5);
//         captchaValue = value;
//     }

//     function setcaptcha()
//     {
//         let html = captchaValue.split("").map((char)=>{
//             const rotate = -20 + Math.trunc(Math.random()*30);
//             const font = Math.trunc(Math.random()*fonts.length);
//             return`<span
//             style="
//             transform:rotate(${rotate}deg);
//             font-family:${font[font]};
//             "
//            >${char} </span>`;
//         }).join("");
//         document.querySelector(".login_form #captcha .preview").innerHTML = html;
//     }

//     function initCaptcha()
//     {
//         document.querySelector(".login_form #captcha .captcha_refersh").addEventListener("click",function(){
//             gencaptcha();
//             setcaptcha();
//         });

//         gencaptcha();
//         setcaptcha();
//     }
//     initCaptcha();

//     document.querySelector(".login_form .form_button").addEventListener("click",function(){
//         let inputcaptchavalue = document.querySelector(".login_form #captcha input").value;

//         if (inputcaptchavalue === captchaValue) 
//         {
//             // swal("","Log in","success");
//             alert("Log in success");
//         }
//         else
//         {
//             // swal("Invalid Captcha");
//             alert("Invalid Captcha");
//         }
//     });
// })();




































