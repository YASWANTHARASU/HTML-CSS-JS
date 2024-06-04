//const sub=document.getElementById('kk');
const pwb=document.getElementById('pw');
const lengt=10;
const up="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const low="abcdefghijklmnopqrstuvwxyz";
const num="0123456789";
const sym="!@#$%^&*()_+-<>?{}=,./[]";
const allc=up+low+num+sym;
function createpass(){
    let pwd="";
    pwd=pwd+up[Math.floor(Math.random()*up.length)];
    pwd=pwd+low[Math.floor(Math.random()*low.length)];
    pwd=pwd+num[Math.floor(Math.random()*num.length)];
    pwd=pwd+sym[Math.floor(Math.random()*sym.length)];
    while(lengt>pwd.length)
        {
            pwd=pwd+allc[Math.floor(Math.random()*allc.length)];
            
        }
        pwb.value=pwd;       
}
function copy(){
    pwb.select();
   document.execCommand("copy");
}