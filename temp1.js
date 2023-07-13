let ele=document.querySelector("button")
window.addEventListener("scroll",function(){
    if(window.scrollY >= 600){
        ele.style.display="block";
    }
    else
    {ele.style.display="none";}
})
ele.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
        
    })
})