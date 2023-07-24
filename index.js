const container = document.querySelector('.container')
const container1 = document.querySelector('.con-1')
const container2 = document.querySelector('.container_2')
const container3 = document.querySelector('.container_3')
// console.log(container3);
const closeBtn =document.querySelector('.close')
const sectionImg = document.querySelectorAll(".sec-2")
const parentImg = document.querySelector(".parentImg")
const next = document.querySelector("#next")
const pre = document.querySelector("#back")


const arr = []

for(let i=0;i<sectionImg.length;i++){

    arr.push(sectionImg[i])

    sectionImg[i].addEventListener("click",()=>{

        for(let k=0;k<sectionImg.length;k++){
            sectionImg[k].classList.remove("active")
        }
        
        sectionImg[i].classList.add("active")
        parentImg.src = sectionImg[i].src
    })
}

container.addEventListener("click",(e)=>{
    container.style.display = "none"
    container1.style.display = "none"
    container2.style.display = "block"

    parentImg.src = e.target.src
    
    for(let i=0;i<sectionImg.length;i++){
        if(e.target.src == sectionImg[i].src){
            sectionImg[i].classList.add("active")
        }
    }
})

let count = 0
next.addEventListener("click",()=>{
    count++
    if(count > arr.length){
        count = 0
    }
    parentImg.src = arr[count].src
    for(let l = 0 ; l < sectionImg.length; l++){
        if(parentImg.src == sectionImg[l].src){
            sectionImg[l].classList.add("active")
        }
        else{
            sectionImg[l].classList.remove("active")
        }
    }
})

pre.addEventListener("click",()=>{
    count--
    if(count < 0){
        count = arr.length
    }
    parentImg.src = arr[count].src
    for(let p = 0 ; p < sectionImg.length; p++){
        if(parentImg.src == sectionImg[p].src){
            sectionImg[p].classList.add("active")
        }
        else{
            sectionImg[p].classList.remove("active")
        }
    }
})

closeBtn.addEventListener('click',()=>{
    container2.style.display = "none"
    container1.style.display = "block"
    container.style.display = "block"
})

container1.addEventListener("click",()=>{
    container.style.display = "none"
    container1.style.display = "none"
    container2.style.display = "none"
    container3.style.display = "block"
})