let mIconElement=document.querySelector("#mIcon")

let navElement=document.querySelector("nav")//ye nav ko target kry ga 
mIconElement.addEventListener("click",()=>{
    navElement.classList.toggle("left-[0px]")//ye ab left se 0px kr dy ga mtlb phly tha -100% mtlb show nahi ho raha tha ab jb click kren gy button pe tu ye show kry ga 
})