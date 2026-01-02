let boxes=document.querySelectorAll(".box");
let rstbtn=document.querySelector("#res");
let msgCont=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");
let turno=true;
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno)
        {
            box.innerText="O";
            turno=false;
            box.style.color="Green";
        }
        else
        {
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        checkWinner();
    });
}
);

const checkWinner = ()=>
{
    let Count=0;
   
    for(let winner of win)
    {
        console.log(winner[0]&"-",winner[1],winner[2]);
        let p1Val = boxes[winner[0]].innerText;
        let p2Val = boxes[winner[1]].innerText;
        let p3Val = boxes[winner[2]].innerText;
        if(p1Val!=""&&p2Val!=""&&p3Val!=""){
            if(p1Val===p2Val&&p2Val===p3Val)
            {
                showWinner(p1Val);
                
            }
           else
            {
                Count++;
            }
        } 
    }
 
    if (Count==8)
    {
         msgCont.classList.remove("hide");
         msg.innerText="Game Over!";
    }   
    
}
const showWinner = (winval)=>{
    msg.innerText=`Game Over! Congrats, the winner is ${winval}`;
    msgCont.classList.remove("hide");
    for(let a of boxes)
    {
        a.disabled=true;
    }
}

const reset = ()=>{
    turno=true;
    for(let a of boxes)
    {
        a.disabled=false;
        a.innerText="";
    }
    msgCont.classList.add("hide");
}

rstbtn.addEventListener("click",reset);