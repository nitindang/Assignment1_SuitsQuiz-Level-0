var readlineSync=require("readline-sync")
var chalk=require("chalk")

console.log(chalk.bgCyan("Let's Test How much you Love SUITS !!\n"))
var user=readlineSync.question("What's your name ?")
console.log(chalk.yellow("Hi "+ user+"\n"));

var inp=readlineSync.question("\nDo you wish to play(y/n) ? ")
if(inp==="y"){
  console.log(chalk.yellow("Come on!! Let's go\n"))
  console.log(chalk.red("Here are the rules\n 1) There are 15 questions in total, one mark for each correct answer\n 2) Negative for each wrong answer\n 3) Choose answers from the given options "))
}
else if(inp==="n"){
console.log(chalk.cyan("Ok Your loss... See ya!!"))
process.exit()
}
else{
  console.log("Wrong Key! Restart game again!!")
  process.exit()
}

console.log("\n")
console.log(chalk.bgCyan("Come on appeal the Lawyer inside you and win this quiz :) \n"));
var highestscore=14;
var score=0
function qstreak(question, answer, alternative){
  var tempans=readlineSync.question(question);
  if(tempans.toLowerCase()==answer.toLowerCase()){
    console.log(chalk.green("Correct Answer\n "))
    score+=1
    console.log(chalk.yellow(alternative)+"\n")
  
    console.log(chalk.cyan.bold(user+ " your current score is ", score)+"\n");
    console.log(chalk.red("---------------------------------------------"))
  }
  else{
    console.log(chalk.red("Incorrect Answer\n "));
    console.log(chalk.green("The correct answer is "+ answer+"\n"))
    console.log(chalk.yellow(alternative)+"\n")
    score-=1
    
    console.log(chalk.cyan.bold(user+ " your current score is ", score)+"\n");
      console.log(chalk.red("---------------------------------------------"))
  }
}

var questions=[{
  question: `Suits is set in fictional law firm in :
  a) Atlanta
  b) Austin
  c) Chicago
  d) New York City\n`,
  answer:"d",

  alternative: "There are more lawyers than there are jobs for lawyers in NYC and beyond"
  
},
{
  question:`What network airs 'Suits?
  a) USA
  b) NBC
  c) CBS
  d) TNT
  \n`,
  answer: "a",
  alternative: "The USA Network was originally launched as UA-Columbia/MSG in 1977. It relaunched as USA Network on April 9, 1980"

},
{
  question: `Who is the female shark in charge of the 'Suits' law firm?
  a) Rachel Zane
  b) Donna Paulsen
  c) Jessica Pearson
  d) Olivia Pear\n`,
  answer: "c",
  alternative: "Before she became named partner at Pearson Hardman, she was an associate at Gordon Schmidt Van Dyke."
  
},
{
  question:`Who lands an interview with Harvey Specter after he runs from a drug deal gone bad?
  a) Jack Soloff
  b) Sean Cahill
  c) Mike Ross
  d) Jeff Malone\n`,
  answer:"c",
  alternative:"Mike is a brilliant college drop-out who growing up, lived with his grandmother after his parents died in a car crash."
  
},
{
  question:`The firm hires law graduates from ________?
  a) Yale
  b) Harvard
  c) Columbia
  d) Stanford\n`,
  answer:"b",
  alternative:"Founded in 1817, Harvard Law School is one of the preeminent centers of legal education in the world."
  
},
{
  question:`Louis has a rivalry with _______?
  a) Charles
  b) Harvey
  c) Jenny
  d) Jack\n`,
  answer:"b",
  alternative:"Louis is particularly jealous of Harvey's success and feels that his own contributions to the firm have been overlooked as a result."
  
  
},
{
  question:`_____ is the firm's expert on all financial matters?
  a) Charles Frostman
  b) Jeff Malone
  c) Robert Zane
  d) Louis Litt\n`,
  answer:"d",
  alternative:"Louis is overly pedantic, jealous to the point of paranoia, highly suspicious, snobbish, and cruel. However, he is very loyal to those he loves."
  
  
},
{
  question:`Mike Ross is not an actual ________?
  a) Lawyer
  b) Detective
  c) Financial Consultant 
  d) Doctor\n`,
  answer:"a",
  alternative:"Mike dropped out of college and never passed the bar in his own name."
  
  
},
{
  question:`Harvey Specter is a brilliant __________ lawyer?
  a) Corporate Litigation
  b) Trial
  c) Consumer 
  d) Criminal\n`,
  answer:"a",
  alternative:"A lawyer starting out in corporate litigation can make an average of $160,000/year."
  
  
},
{
  question:`'Suits' first aired in _____?
  a) 2011
  b) 2012
  c) 2013
  d) 2014\n`,
  answer:"a",
  alternative:" 'Suits' premiered on June 23, 2011."
  
  
},
{
  question:`Harvey's unusual middle name is _______?
  a) Eugene
  b) Martha
  c) Reginald
  d) Sidwell\n`,
  answer:"c",
  alternative:" Harvey doesn't like to use his middle name."
  
  
},
{
  question:`Who is Harvey's "in the know" assistant?
  a) Rachel Zane
  b) Jessica Pearson
  c) Donna Paulsen
  d) Dana Scott\n`,
  answer:"c",
  alternative:" Donna is extremely perceptive, with the inside scoop of all the comings and goings at the firm and a razor sharp wit, she is admired and feared by both associates and partners alike."
  
  
},
{
  question:`Who plays Mike Ross?
  a) D.B. Woodside
  b) Patrick J. Adams
  c) Wendell Pierce
  d) Gary Cole\n`,
  answer:"b",
  alternative:" Patrick can be seen as Rex Tyler/Hourman in the TV series 'Legends of Tomorrow."
  
  
},
{
  question:`After working 12 years for Harvey, Donna briefly goes to work for __________?
  a) Louis Litt
  b) Robert Zane
  c) Ava Hessington
  d) Logan Sanders\n`,
  answer:"a",
  alternative:" Louis fires Donna so that she could go back to work for Harvey."
  
  
},
{
  question:`What was the quote on Louis's Mug?
  a) You just got Litt up
  b) Litt and sons
  c) Your smile is Litt
  d) Litt it up\n`,
  answer:"a",
  alternative:" Louis made a custom designed mug for everyone in the office"
  
  
}]
function subsitute(score){
  console.log("Your score is "+ score);
  console.log(chalk.green("Better Luck next time..."))
}
for(var i=0;i<questions.length;i++){

  if(i==7&&score<=2){
    console.log("Sorry you can't go to Level 2 due to low score !!")
    subsitute(score);
    process.exit()
  }
  if(i==7){
    console.log(chalk.bgMagenta("\nSwitching to level 2!! Keep up the good work...\n"))
  }

  console.log(chalk.red("Question "+(i+1)+":"))
  qstreak(questions[i].question,questions[i].answer, questions[i].alternative);
}

if(score>highestscore){
  console.log(chalk.green("\nWow you just beat the highscore!! ")+chalk.red("Send me the screenshot and you will get a free netflix account...\n "))
}

console.log("You have got a score of "+chalk.green(score)+"\n");

console.log("The highest score so far is "+chalk.red(highestscore)+"\n");

console.log(chalk.bgRed("It was amazing to have you here !! ")+ chalk.bgCyan(" \"Adios Amigo!!\""))


process.exit();

