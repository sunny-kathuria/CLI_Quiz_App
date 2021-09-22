var input = require("readline-sync");
var score=0;
var user=input.question("What is your name? ");
console.log("Welcome "+user+"!!!, Now start playing this Awesome Quiz. We hope that you will like it(Score based Quiz, It also have -ve marking)");

function Quiz(Ques,Ans){
  var userAns=input.question(Ques);
    if(userAns===Ans){
    score+=1;
    console.log("Lovely!, your answer is correct.");
  }
  else{
    score-=1;
    console.log("Sad! Wrong answer, try again later");
  }
}


Quiz("Who sent you this quiz(First name only)? ","Sunny");
Quiz("Where does he live?(State only) ", "Haryana");
Quiz("In which university, he studies? ","DIT University");
Quiz("When was he born? (year only)","1999");
Quiz("In which company he is working?","IBM");
console.clear()
console.log("Thank You, "+user+"\nYour Score: "+score);
