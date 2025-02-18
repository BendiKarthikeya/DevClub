var minus=document.querySelector("#decrement");
var plus=document.querySelector("#increment");
var value=document.querySelector(".value")
var changeBy=document.querySelector("#changeBy");
var reset=document.querySelector("#reset");

decrement.addEventListener("click",function(){
    value.textContent=value.textContent-changeBy.valueAsNumber;//value as number is for form elemnts
})
increment.addEventListener("click",function(){
    value.textContent=parseInt(value.textContent) + parseInt(changeBy.value);
})
reset.addEventListener("click",function(){
    value.textContent=0;
})