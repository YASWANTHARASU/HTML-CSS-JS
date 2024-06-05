const ipb=document.getElementById("ip");
const lco=document.getElementById("lc");
function add(){
    if(ipb.value==''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=ipb.value;
        lco.appendChild(li);
        let sp=document.createElement("span");
        sp.innerHTML="\u00d7";
        li.appendChild(sp);

    }
    ipb.value='';
    savedata();
}
lco.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);
function savedata(){
    localStorage.setItem("data",lco.innerHTML);
}
function showtask(){
    lco.innerHTML=localStorage.getItem("data");
}
showtask();