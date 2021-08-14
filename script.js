// const start = document.querySelector(".start");
const question = document.querySelector(".question");
const title = document.querySelector("#title");
const answerA = document.querySelector("#A");
const answerB = document.querySelector("#B");

var answerValue = document.querySelector("#type").value;
var now = 1;

const q ={
    1: {"title":"Q2" , "type":"EI" , "A":"E", "B":"I"},
    2: {"title":"Q3" , "type":"EI" , "A":"E", "B":"I"},
    3: {"title":"Q4" , "type":"SN" , "A":"S", "B":"N"},
    4: {"title":"Q5" , "type":"SN" , "A":"S", "B":"N"},

}

function startClick(){
    start.classList.toggle("hidden");
    question.classList.toggle("hidden");
}

function answerCountA(){
    var typeValue = parseInt(document.querySelector(`#${answerValue}`).value)
    typeValue+=1;
    document.querySelector(`#${answerValue}`).value = typeValue;
    next();
}
function answerCountB(){
    next();
}


function next(){
    title.innerText = q[now]["title"];
    answerA.innerText = q[now]["A"];
    answerB.innerText = q[now]["B"];
    answerValue=q[now]["type"];
    now+=1;
}




// start.addEventListener("click",startClick);
answerA.addEventListener("click",answerCountA);
answerB.addEventListener("click",answerCountB)
