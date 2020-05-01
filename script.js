var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 20;






var curPage = 0, 
correct = 0;
var myAnswers = [];
var myQuiz = [
  ["How many countries are in the African continent?",3, "1", "45", "54", "55"],
  ["What is the French translation of I am hungry?",2, "J'aime manger", "J'ai faim", "Je suis faim", "C'est la famine"],
  ["Which of these countries is the hottest country in the world?",1, "Lybia", "mexico", "Saudi Arabia", "India"],
  ["Who invinted school?",4,"Frederick Douglass", "Roberto Nevillis", "Socrates", "Horace Mann", 4]


];
console.log(myQuiz);

document.getElementById("btnNext").addEventListener("click", moveNext);
document.getElementById("btnPrevious").addEventListener("click", moveBack);


var myHeader = document.getElementById("quizHeader");
var classname = document.getElementsByClassName("answer");
var myQuestion = document.getElementById("questions");
var progressBar = document.getElementById("progressBar");
var btnNext = document.getElementById("btnNext");
var btnPrevious = document.getElementById("btnPrevious");
var btnFinish = document.getElementById("finishQuiz");


checkpage();

btnNext.addEventListener('click' , moveNext);
btnPrevious.addEventListener('click' , moveBack);
btnFinish.addEventListener('click' , endQuiz);

for (var i= 0; i < classname.length; i++) {
  classname[i].addEventListener('click', myAnswer, false);
  
}
function myAnswer() {
  var idAnswer = this.getAttribute("data-id");
 
  myAnswers[curPage] = idAnswer;
  if(myQuiz[curPage][1] == idAnswer) {
    console.log('correct Answer');
  } else {
    console.log('Wrong Answer')
  }
  addBox();
}

function addBox() {
  for (var i = 0; i < myQuestion.children.length; i++) {
    var curNode = myQuestion.children[i];
    if (myAnswers[curPage] == (i + 1)) {
      curNode.classList.add("selAnswer");
    } else {
      curNode.classList.remove("selAnser");
    }
    }
}
 function moveNext() {
   if(myAnswers[curPage]) {
     console.log('okay to proceed');
   if (curPage < (myQuiz.length - 1) ) {
   curPage++;
   checkpage(curPage);
   } else {
     console.log(curPage + ' ' + myQuiz.length);
     if (myQuiz.length >= curPage) {
       endQuiz();
   } 
   else {
    console.log ('end of quiz Page ' + curPage);
   }
  }
 } else {
   console.log('not answered');
 }
}

 function endQuiz() {
  if(myAnswers[2]) {
    var output = "<div class= 'output'> Quiz Results<BR>";
    var questionResult = "NA"
    console.log('Quiz Over');
    for (var i = 0; i < myAnswers.length; i++) {
      if (myQuiz[i][1] == myAnswers[i]) {
        questionResult = '<span class = "glyphicon glyphicon-ok-circle" aria-hidden="true"></span>';
        correct++;
      } else {
        questionResult = '<span class = "glyphicon glyphicon-remove-circle" aria-hidden="true"></span>';
      }
      output = output + '<p>Question ' + (i + 1) + ' ' + questionResult + '</p> ';
    }
    output = output + '<p>You scored ' + correct + ' out of ' + myQuiz.length + '</p></div> ';
    document.getElementById("quizContent").innerHTML = output
  } else {
    console.log('not answered');
  }
   
 }




  function checkpage(i) {
 if(curPage == 0) {
   btnPrevious.classList.add("hide");
} else { 
  btnPrevious.classList.remove("hide");
}

if ((curPage + 1) < (myQuiz.length)) {
  btnNext.classList.remove("hide");
} else { 
  btnNext.classList.add("hide");
  btnFinish.classList.remove("hide");
}
myHeader.innerHTML = myQuiz[curPage][0];

 
    myHeader.innerHTML = myQuiz[curPage][0];
    for (var i = 0; i < myQuestion.children.length; i++) {
      var curNode = myQuestion.children[i];
      console.log(curNode.childNodes[1].innerHTML);
      curNode.childNodes[1].innerHTML=myQuiz[curPage][(i+2)];
      if(myAnswers[curPage] == (i + 1)) {
        curNode.classList.add("selAnswer");
      } else {
        curNode.classList.remove("selAnswer");
      }
    }

    var increment = Math.ceil((curPage) / (myQuiz.length) * 100);
    progressBar.style.width = (increment) + '%';
    progressBar.innerHTML = (increment) + '%';

  }
  function moveBack() {
     if (curPage > 0) {
      curPage--;
      checkpage(curPage);
    } else {
    console.log ('end of quiz Page ' + curPage);
    }
  
  }

  function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " Left to complete the quiz.";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval );
        btnPrevious.classList.add("hide");
        btnNext.classList.add("hide");
       endQuiz();
        sendMessage();
      }
  
    }, 1000);
  }
  
  function sendMessage() {
    timeEl.textContent = " Time is over: Thank you for your participation ";
  
    
    mainEl.appendChild();
  
  }
  
  setTime();
