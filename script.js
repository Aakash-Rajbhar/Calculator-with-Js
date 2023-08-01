const restultBtn = document.getElementById("equal");
let buttons = document.querySelectorAll("button");
let input = document.getElementById("inputBox");
let delButton = document.getElementById("delBtn");

let icon = document.getElementById("icon");

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      string = eval(string);
      input.value = string;
    }

    else if(e.target.innerHTML === "AC"){
        string = "";
        input.value = string
    }
    else if(e.target.innerHTML === "DEL") {
        string = string.substring(0,string.length -1);

        input.value = string;
    }

    else{

        string += e.target.innerHTML;
        input.value = string;
    }
  });
})


icon.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        icon.src = "moon.png";
    }
    else{
        icon.src = "sun.png";
    }
})