// const p1={
//     score:0,
//     button:
// }
const btn1=document.querySelector("#p1Button")
const btn2=document.querySelector("#p2Button")
const scr1=document.querySelector("#p1Score")
const scr2=document.querySelector("#p2Score")
const reset=document.querySelector("#reset")
const max=document.querySelector("#maxScore")

let p1Score=0
let p2Score=0
var winnningScore=3
// let isGameOver=false 

btn1.addEventListener("click",function(e){
    if(p1Score!==winnningScore&&p2Score!==winnningScore){
    p1Score+=1
    scr1.textContent=p1Score
    if(p1Score===winnningScore){
    scr1.classList.add('winner')
    scr2.classList.add('looser')
    btn1.disabled=true;
    btn2.disabled=true;
}
    }

})
btn2.addEventListener("click",function(e){
    if(p2Score!==winnningScore &&p1Score!==winnningScore){
    p2Score+=1
    scr2.textContent=p2Score
    if(p2Score===winnningScore){
        scr2.classList.add('winner')
        scr1.classList.add('looser')
        btn1.disabled=true;
    btn2.disabled=true;
    }
    }
})
function rest(){
    p1Score=0
    p2Score=0
    scr1.textContent=p1Score
    scr2.textContent=p2Score
    scr1.classList.remove("winner","looser")
    scr2.classList.remove("looser","winner")
    btn1.disabled=false;
    btn2.disabled=false;
    
}
reset.addEventListener('click',rest)

max.addEventListener('change',()=>{
    winnningScore=parseInt( max.value)
    
    
        rest();
    
    
})
