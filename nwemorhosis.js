(function(){
    const fonts = ["cursive", "sans-serif", "serif", "monospace"] ;
    let captchaValue = "";
    function generateCaptcha(){
    let value = btoa (Math. random () *10000000000);
    value = value. substr(0,5+Math.random()*5);
    captchaValue = value;
    }
    function setCaptcha(){
    captchaValue.split("").map((char)=>{
    const rotate = Math.trunc(Math.random()*30);
    const font = Math.trunc(Math.random()*fonts.length);
    return `<span style="transform:rotate(${rotate}deg);
    font-family:${fonts[font]}
    "   >${char} </span>`;
    }).join("");
    document.querySelector(".login-form.captcha.preview").innerHTML = html;
}

function initCaptcha()
{
    document.querySelector(".login-form.captcha.captcha-refresh").addEventListener("click",function(){
    generateCaptcha();
    setCaptcha();
    });

    generateCaptcha();
    setCaptcha();
}
initCaptcha();
document.querySelector(".login-form #login-btn").addEventListener("click",function()
{
    let inputCaptchaValue = document.querySelector(".login-form .captcha-input").value;
   if(inputCaptchaValue === captchaValue)
   {
    swal("","Logining In!","success");
   }
   else
   {
    swal("Invalid captcha");
   }

});
});
