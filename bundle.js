(()=>{gsap.registerPlugin(Observer);let e=document.querySelector(".animated-element"),t=document.querySelector(".header-window"),n=0;function o(o){let r=e.getBoundingClientRect().width,i=t.getBoundingClientRect().width;i-r<o.x-50?(n=i-r,gsap.set(e,{x:n,z:0})):gsap.set(e,{x:o.x-50}),o.x<50&&(n=0,gsap.set(e,{x:n}))}Observer.create({target:window,ignore:["NAV","LI","A","UL"],onMove:e=>o(e),onClick:e=>o(e)}),Observer.create({target:window,type:"wheel",onDown:e=>moveDown(e)}),gsap.to(".animated-element",{x:"100",y:"1000",width:"100%",height:"100%",pin:!0,scrollTrigger:{trigger:".header-window",start:"top",end:"bottom",scrub:!0,toggleActions:"play none none reverse",scale:1}})})();