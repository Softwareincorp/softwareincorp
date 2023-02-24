var quiz=document.getElementById("quiz");
var ques=document.getElementById("question");
var opt1=document.getElementById("option1");
var opt2=document.getElementById("option2");
var opt3=document.getElementById("option3");
var opt4=document.getElementById("option4");
var opt5=document.getElementById("option5");
var r=document.getElementById("result");
var nextbutton= document.getElementById("next");
var q=document.getElementById('quit');
var r1=document.getElementById('res1');
var r2=document.getElementById('res2');

var tques=questions.length;
var ascore=0;
var bscore=0;
var cscore=0;
var dscore=0;
var escore=0;
var quesindex=0;
function quit()
{         
	      quiz.style.display='none';
          result.style.display='';
		  r.style.display='';
		  res1.style.display='';
		  res2.style.display='';
          r.textContent="Вы ответили не на все вопросы";
          q.style.display="none";
}
function give_ques(quesindex) 
{
	ques.textContent=quesindex+1+". "+questions[quesindex][0];
	opt1.textContent=questions[quesindex][1];
	opt2.textContent=questions[quesindex][2];
	opt3.textContent=questions[quesindex][3];
	opt4.textContent=questions[quesindex][4];
	opt5.textContent=questions[quesindex][5];
	 return;// body...
};
give_ques(0);
function nextques()
{
	var selected_ans= document.querySelector('input[type=radio]:checked');
	if(!selected_ans)
		{alert("Выберете один из вариантов ответа");return;}

	if(selected_ans.value==1)
		{ascore=ascore+1;}
	if(selected_ans.value==2)
		{bscore=bscore+1;}
	if(selected_ans.value==3)
		{cscore=cscore+1;}
	if(selected_ans.value==4)
		{dscore=dscore+1;}
	if(selected_ans.value==5)
		{escore=escore+1;}
	selected_ans.checked=false;
	    quesindex++;
	    if(quesindex==tques-1)
	     	nextbutton.textContent="Показать результат";
		var arr=[ascore, bscore, cscore, dscore, escore];
		var m=Math.max(...arr);
		var index=arr.indexOf(m);
		var roles=["Вы Цундере","Вы Яндере","Вы Кудере","Вы Дередере","Вы Хадзидере"];
	    if(quesindex==tques)
	    {
	    q.style.display='none';
        quiz.style.display='none';
        result.style.display='';
		r.style.display='';
		res1.style.display='';
		res2.style.display='';
        result.textContent=roles[index];
            return;
	    }
        give_ques(quesindex);

}
