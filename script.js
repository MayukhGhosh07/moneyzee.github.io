
gsap.from("#nav",{
    duration:1.5,
    y:-900,
   

})
gsap.from("#page1-img",{
    duration:1.5,
    opacity:0,
    x:-900

})
gsap.from("#page1-text-wrapper",{
    duration:1.5,
    opacity:0,
    x:900

})






var ham=document.getElementById("ham")
var cross=document.getElementById("cross")
var list=document.getElementById("ham-items")

function show(){
    ham.style.display="None"
    cross.style.display="Inline"
    list.style.transform="translateY(0)"
}
function hide(){
    ham.style.display="Inline"
    cross.style.display="None"
    list.style.transform="translateY(-500%)"
}



