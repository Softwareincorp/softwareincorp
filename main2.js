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
		var roles=["Вы похожи на Коми и Тагано\n(У Коми проблемы с общением)\nРебята, с которыми Коми смогла сдружиться, перестали воспринимать её как неприступную и холодную королеву, а увидели, что она ранима и кротка. Хитохито Тадано учился с Коми в одном классе и сидел с ней за одной партой. Он в отличие от девушки был едва ли не оратором. Но кроме умения много и хорошо говорить, он сумел заглянуть в душу девушки и понять её проблему. Тадано начинает общаться с Коми посредством записок, которые делает на классной доске. Коми же совладала со стеснительностью и нашла в себе силы открыться тем ребятам, которые выступали друзьями. Каждый день общения приносил свои плоды.",
		"Вы похожи на Кирито и Асуна\n(Мастера меча онлайн)\nАсуна — очень добрая и отзывчивая девушка, и как Кирито всегда готова помочь людям в трудную минуту. С самого начала Асуна не боялась смерти в игре, но после встречи с Кирито куном, она приняла его слова в свою душу, потому что его слова шли к ней от всего сердца.",
		"Вы похожи на Кагуя Синомия и Миюки Сироганэ\n(Госпожа Кагуя: в любви ка на войне)\nГлава ученического совета Миюки Сироганэ — обычный парень из бедной семьи, не имеющий каких то талантов, но благодаря уму и трудолюбию сумевший добится признания и стать любимчиком школы. И замглавы Кагуя Синомия — наследница очень богатой и влиятельной семьи, талантливая и способная во всем за что берется.",
		"Вы похожи на Усаги и Мамору\n(Сейлор Мун)Проходят столетия, и наши герои рождаются на Земле как обычные люди: Усаги Цукино и Мамору Чиба. Воскресшая Королева Берилл и Металия угрожают планете. Для битвы с ней Усаги становится Сейлор Мун, а Мамору — Такседо Маском. Первая встреча главных героев далека от идеала и весьма комична: Усаги выкидывает результаты экзамена и попадает им непосредственно в Мамору. Да-да. С этого момента они ругаются при каждой встрече, но продолжают любить друг друга.",
		"Вы похожи на Хака и Йона\n(Йона на Заре)\nОдин из ее самых больших недостатков - умение говорить вещи, которые могут быть поняты двояко либо в романтическом аспекте. Хак постоянно попадает в нелепые ситуации, ожидая от принцессы большего, чем обычных дружеских отношений. Таким образом, можно сделать вывод, что Йона довольно глупа и наивна, когда речь заходит о романтике или интимных отношениях."];
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
