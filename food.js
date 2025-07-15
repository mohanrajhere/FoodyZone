var sidenav = document.querySelector(".side-navbar")



function showNavbar()
{
    sidenav.style.left="0"
}

function closeNavbar()
{
    sidenav.style.left="-60%"
}

var headerbtn= document.querySelector(".header-btn")

headerbtn.addEventListener("click",function(){
    window.location.href="fsection.html"

})

var subscribe=document.querySelector(".sub")

subscribe.addEventListener("click",function(){
    window.location.href="https://chat.whatsapp.com/CR3Z64KFAG0CXZW8SaEoSx"
})
