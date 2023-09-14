let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

document.getElementById("btn").addEventListener("click", Add);

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Task")
    }else{
        let newEle = document.createElement("ul");
        // newEle.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        newEle.innerHTML=`${inputs.value} <button id="btn2">X</button>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("button").addEventListener("click" , remove);
        function remove(){
            newEle.remove()
        }
    }
}