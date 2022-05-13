//Question bank
var questionBank= [
  {
      question : 'What is menstruation? Menstruation is the monthly shedding of the lining of a woman’s:',
      option : ['Ovaries','Uterus','Cervix','Vagina'],
      answer : 'Uterus'
  },
  {
      question : 'Premenstrual Syndrome (PMS) is normal and typically occur in the week or two before the start of a period. Symptoms can include:',
      option : ['Physical Discomfort: Headache, Bloating, Tender Breasts, Acne','Mental Discomfort: Fatigue, Irritability, Depression','All Of Them','Mood Swings, Food Cravings'],
      answer : 'All Of Them'
  },
  {
      question : 'Premenstrual dysphoric disorder (PMDD). PMDD is similar to PMS, but is more severe. It can cause:',
      option : ['Depression and Tension','Severe Mood Shifts','Lasting Anger or Irritability','All of Them'],
      answer : 'All of Theme'
  },
  {
      question : 'If any unusual odors accompany the following symptoms, it is time to get check! It does not include:',
      option : ['Smell of Blood','Changinh in Bleeding Amount','Pain','Unusual Vaginal Fluids'],
      answer : 'Smell of Blood '
  },
  {
      question : 'Can my period be stopped? No method guarantees no periods, but you can suppress your cycle with various types of birth control such as:',
      option : ['Birth Control Pills or Hormone Shot','Hormonal IUD','All of Them','Arm Implant'],
      answer : 'All of Them'
  }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
  for(var a=0;a<span.length;a++){
      span[a].style.background='none';
  }
  question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
  option0.innerHTML= questionBank[i].option[0];
  option1.innerHTML= questionBank[i].option[1];
  option2.innerHTML= questionBank[i].option[2];
  option3.innerHTML= questionBank[i].option[3];
  stat.innerHTML= "QUESTION"+' '+(i+1)+' '+' OF '+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
  if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
  {
      score= score +1;
      // document.getElementById(e.id).style.background= 'Crimson';
  }
  else{
      // document.getElementById(e.id).style.background= 'AliceBlue';
  }
  setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
  if(i<questionBank.length-1)
  {
      i=i+1;
      displayQuestion();
  }
  else{
      points.innerHTML= score+ '/'+ questionBank.length;
      quizContainer.style.display= 'none';
      scoreboard.style.display= 'block'
  }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
  location.reload();
}

//function to check Answers
function checkAnswer(){
  var answerBank= document.getElementById('answerBank');
  var answers= document.getElementById('answers');
  answerBank.style.display= 'block';
  scoreboard.style.display= 'none';
  for(var a=0;a<questionBank.length;a++)
  {
      var list= document.createElement('li');
      list.innerHTML= questionBank[a].answer;
      answers.appendChild(list);
  }
}


displayQuestion();