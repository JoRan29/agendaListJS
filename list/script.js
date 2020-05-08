// DOM elements
let ulTasks = document.querySelector("ul");
let liTasks = document.querySelectorAll("li");
let inputNewTask = document.querySelector("#newTask");
let msg = document.querySelector(".msg");
let radioApp = document.querySelector("#append");
let radioPre = document.querySelector("#prepend");
let animate = document.querySelector(".animate");
let animateText = animate.textContent;

// animate text

let splitText = animateText.split("");
animate.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  animate.innerHTML += "<span>" + splitText[i] + "</span>";
}

let complete = () => {
  clearInterval(timer);
  timer = null;
};

let onTick = () => {
  let span = animate.querySelectorAll("span")[char];
  span.classList.add("move");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
};

let char = 0;
let timer = setInterval(onTick, 60);

console.log(splitText);
// radio btns

console.log(radioApp, radioPre);
// event listener - click
// liTasks.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     e.target.remove();

//     // if (e.target.style.textDecoration == "line-through") {
//     //   e.target.style.textDecoration = "none";
//     //   e.target.style.color = ""; // "" returns color to default
//     // } else {
//     //   e.target.style.textDecoration = "line-through";
//     //   e.target.style.color = "gray";
//     // }
//   });
// });

ulTasks.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.tagName == "LI") {
    e.target.remove();
  }
});

inputNewTask.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    let liNewTask = document.createElement("li");
    let inputText = inputNewTask.value;
    liNewTask.textContent = inputText;
    if (inputText != "") {
      if (radioApp.checked) {
        ulTasks.append(liNewTask);
      } else {
        ulTasks.prepend(liNewTask);
      }
    } else {
      msg.style.display = "block";
      msg.innerHTML = "Must add text content!";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 2000);
    }
    inputNewTask.value = "";
  }
});
