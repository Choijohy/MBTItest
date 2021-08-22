var result = new Object()


var ISFP = new Mbti("ISFP","lion","ISFP인 당신은 호랑이입니다");
var ESFP = new Mbti("ESFP","lion","ESFP인 당신은 호랑이입니다");
var ESTJ = new Mbti("ESTJ","cat","ESTJ인 당신은 고양이입니다");
var INFP = new Mbti("INFP","dog","INFP인 당신은 강아지입니다");
var ENFJ = new Mbti("ENFJ","rabbit","ENFJ인 당신은 토끼입니다");


    
// This is perceived as just a string..
//const types = ["ISFP","ESTJ","INFP","ENFJ"];

var types = [ISFP,ESTJ,INFP,ENFJ];


// mbti 유형별 object 생성
function Mbti(type,animal,explain){
    this.type = type;
    this.animal = animal;
    this.explain = explain;
}

// 유형별 object를 result의 value로 넣기
for (var type of types){
    result[type["type"]] = type;
}



// append directly -> 2개씩 입력
// result={
//     "ISFP":ISFP,
//     "ESTJ":ESTJ,
// }