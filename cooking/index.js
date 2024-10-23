const input=document.querySelector(".input-txt")
const food=document.querySelector('.respones')
const btn=document.querySelector('.btn')
const close=document.querySelector(".closee");
const updatess=document.querySelector(".updates");
const updive=document.createElement("div");
const ipp=document.createElement("p");
const btnss=document.createElement("button");
const cons=document.querySelector(".mains");
const reel=document.getElementById("rbtn");
console.log(reel);
const foodelist=document.querySelector(".food-items")
console.log(foodelist);
reel.addEventListener("click",()=>{
     if(foodelist.classList.contains("hide")){
         foodelist.classList.remove("hide")
     }
     else{
         foodelist.classList.add("hide")
     }
 })
// reel.addEventListener("click",()=>{
// console.log("working");

// })
btn.addEventListener("click",()=>{
    const elli=document.createElement("li");
    const pi=document.createElement("p");
    const rebtn=document.createElement("button");
    elli.append(pi,rebtn);
    pi.innerHTML=input.value;
    elli.className="food-items"
    rebtn.setAttribute("onclick","removeel(event)")
    rebtn.id="rbtn"
    rebtn.innerText="❎"
    food.append(elli)
    updive.className="updates"
    ipp.innerHTML=`<strong>✔Successful</strong> update the food`
    btnss.className="closee"
    btnss.innerText="❎"
    updive.append(ipp,btnss)
    cons.prepend(updive)
    // rebtn.addEventListener("click",()=>{
    //     if(elli.classList.contains("hiden")){
    //         elli.classList.add("hiden");
    //         console.log("add");
            
    //     }
    // })
    // short way
    // if(input!=input.value){
    // food.innerHTML +=`<li class=food-items>
    // <p>${input.value}</p>
    // <button onclick=removeel(event) id=rbtn>❎</button>
    // </li>`;
}
    //   updatess.style.display="flex"; 
);
food.insertAdjacentHTML("afterbegin","<li>food items</li>");
// function ups(event){
//     event.target.parentNode.remove()
//     // updatess.style.display="none";
// }
btnss.addEventListener("click",(event)=>{
    event.target.parentNode.remove()
})
function removeel(event){
    event.target.parentNode.remove()
   
}
const btns1=document.querySelector(".btn1");
const input1=document.querySelector(".input-filed");
input1.style.marginTop="10px"
btns1.style.border="none"
btns1.style.backgroundColor="gray"
btns1.addEventListener("click",()=>{
    if(input1.classList.contains("hide")){
        // input1.style.display="block";
        input1.classList.remove("hide");
        btns1.innerText="hiden"
        btns1.style.backgroundColor="gray"
    }
    else{
        // input1.style.display="none";
        input1.classList.add("hide")
        btns1.innerText="show"
        btns1.style.backgroundColor="royalblue"
    }

})
// const resent1=document.getElementById("#resent");
// const clone=document.querySelector(".div"); 
// // console.log(clone)
// const dies=document.querySelector(".conterner");
// function reste(){
//     clone.innerHTML=''
//     let duplecate=dies.cloneNode(true)
//     // console.log(duplecate);
//     clone.append(duplecate)
//     // console.log(clone)
// }
   //console.log(updatess);
    //dom matted 
    // const li=document.createElement("li");
        // li.className="food-items"
    // li.innerHTML += input.value;
    // food.append(li);

    // const main=document.querySelector(".mains")
    // const div=document.createElement("div");
    // const txtnode=document.createTextNode("✔Successful update the food ❎");
    // div.className="updates"
    // div.append(txtnode)
    // main.prepend(div);
    // food.insertAdjacentHTML("afterend","<li>food items1</li>");
// food.insertAdjacentHTML("beforebegin","<li>food items2</li>");
// food.insertAdjacentHTML("afterend","<li>food items3</li>");
// function btn1(){
//     // const ul=document.createElement("ul");
//     const li=document.createElement("li");
//     // const txnt=document.createTextNode("hi bro joshva");
//     li.className="food-items"
//     // li.append(txnt)
//     li.innerHTML += input.value;
//     // ul.append(li)
//     console.log(li);
//     // const h2=document.createElement("h2");
//     food.append(li);
// }
// btn1();


// close.addEventListener("click",()=>{
//  update.style.display="none"
// })
// function updates(){
// }
// updates("✔Successful update the food")
//console.log(div);

