const ch=["rock","paper","scissor"];
const emoji=["✊","✋","✌"];
const player=document.getElementById('player');
const computer=document.getElementById('computer');
const res=document.getElementById('tie');
const playerscore=document.getElementById('playerscore');
const computerscore=document.getElementById('computerscore');
const tiee=document.getElementById('ti');
let ps=0;
let cs=0;
let ti=0;
function game(choice)
{   let ind=Math.floor(Math.random()*3)
    const compchoice=ch[ind];
    const compemo=emoji[ind];
    let result="";
    let plemo="";
    
    if(compchoice==choice)
        {
            result="IT'S A TIE!!";
            plemo=compemo;
            
        }
        else{ switch(choice)
            {
                case "rock":
                    result=(compchoice=="scissor")?"YOU WIN":"YOU LOSE";
                    plemo="✊";
                    break;
                case "paper":
                    result=(compchoice=="rock")?"YOU WIN":"YOU LOSE";
                    plemo="✋";
                    break;
                case "scissor":
                    result=(compchoice=="paper")?"YOU WIN":"YOU LOSE";
                    plemo="✌";
                    break;
            }
        }
            player.textContent=`PLAYER: ${choice} (${plemo})`;
            computer.textContent=`COMPUTER: ${compchoice} (${compemo})`;
            res.textContent=`${result}`;
            res.classList.remove("green","red");
            switch(result)
            {
                case "YOU WIN":
                    res.classList.add("green");
                    ps++;
                    playerscore.textContent=ps;
                    break;
                case "YOU LOSE":
                    res.classList.add("red");
                    cs++;
                    computerscore.textContent=cs;
                    break;
                case "IT'S A TIE!!":
                    ti++;
                    tiee.textContent=ti;
                    break;

            }

}
