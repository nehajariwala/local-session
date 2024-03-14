// like-counter
let count=Number(localStorage.getItem('count'))||0
document.querySelector("#count").innerHTML=count;
const add=()=>{
    count=count+1;
    document.querySelector("#count").innerHTML=count;
    localStorage.setItem("count",count);
}
// subscribe-counterr
let count1=Number(localStorage.getItem('count1'))||0
document.querySelector("#count1").innerHTML=count1;
const add1=()=>{
    count1=count1+1;
    document.querySelector("#count1").innerHTML=count1;
    localStorage.setItem("count1",count1);
}
// session counter1
let count3=Number(sessionStorage.getItem('count3'))||0
document.querySelector("#count3").innerHTML=count3;
const session=()=>{
    count3=count3+1;
    document.querySelector("#count3").innerHTML=count3;
    sessionStorage.setItem("count3",count3);
}
// session counter1
let count4=Number(sessionStorage.getItem('count4'))||0
document.querySelector("#count4").innerHTML=count4;
const sessionn=()=>{
    count4=count4+1;
    document.querySelector("#count4").innerHTML=count4;
    sessionStorage.setItem("count4",count4);
}


document.querySelector("#add").addEventListener("click",add)
document.querySelector("#subscrib").addEventListener("click",add1)
document.querySelector("#session").addEventListener("click",session)
document.querySelector("#session1").addEventListener("click",sessionn)