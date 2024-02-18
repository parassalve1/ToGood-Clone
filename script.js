const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function vidocon(){
    
let vara = document.querySelector('#logo')
let playbtn = document.querySelector("#play")
vara.addEventListener("mouseenter", function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1,
    })
})
vara.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0,
    })
})

vara.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-1000,
        top:dets.y-100,
    })
})
}
vidocon()

function srartinganimation(){
    gsap.from("#page1 h1,a",{
        y:100,
        opacity:0,
        delay:0.3,
        duration:0.9,
        stagger:0.2,
    })
    gsap.from("#page2",{
        y:100,
        opacity:0,
        delay:0.3,
        duration:0.9,
        stagger:0.2,
    })
}

srartinganimation()

let animation = document.querySelector('#logo svg')

gsap.to(animation,{
    rotation : 360,
    repeat:-1,
    duration:10,
    ease:15,
})

function Logoanimation(){
    let LOGO = document.querySelector('#logo')
    let from_animation= document.querySelector('page1') 
}


document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y,
    })
})

document.querySelector("#child1").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform: "translate(-50%,-50%) scale(1)",
       
    })
})


document.querySelector("#child1").addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        transform: "translate(-50%,-50%) scale(0)",
       
    })
})