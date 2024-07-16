function calles(){
let inputbox= Number(document.getElementById("input").value)
let btnbox = inputbox/2.54
let result = document.getElementById("Result")
result.innerHTML = btnbox.toFixed(2)
}