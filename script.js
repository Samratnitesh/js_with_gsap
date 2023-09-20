window.addEventListener("mousemove",function(details){
    var rect = document.querySelector("#rect");
    var valx = gsap.utils.mapRange(0,window.innerWidth,100+rect.getBoundingClientRect().width/2,window.innerWidth-(100+rect.getBoundingClientRect().width/2),
    details.clientX);
    gsap.to('#rect',{
        left: valx,
        ease:Power3
    })
})