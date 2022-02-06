// JavaScript Document
// **last updated 2022/02/04
//var changes=0;
var last="当溢美之词掩盖了真相，沉默不语便成为了罪过。";
//var list=[];
var content;
//var data={};
var change = document.getElementById("wdch");
//var 
var mywords=[
	"当溢美之词掩盖了真相，沉默不语便成为了罪过。",
	"星河滚烫，你是人间理想",
	"生亦何苦，死亦何哀",
	"我在等一个人，等一个我想保护的人。",
	"如果你是我该多好，那你就会知道我有多难过，多喜欢你。",
	"你若盛开，清风自来。",
	"成功只有一个——用自己的方式，去度过一生。",
	"白茶清欢无别事，我在等风也等你。",
	"理想是气球，但现实是铅球。",
	"乍暖还寒时候，最难将息。",
	"从一个城市到另一个城市，只有靠自己努力。",
	"没有值得不值得，只有愿意不愿意。",
	"我再也不要看见她哭的样子了，就算我从此从她心目中消失。",
	//"即使是像遥远的梦想般存在的她，只要握住一支笔......就能触及！！",
	"前天是小兔子，昨天是小鹿，今天是你。",
	"Yesterday is a history, tomorrow is a mystery, but today is a gift.",
	"你制定的计划是.txt还是.exe?",
	"透过孩子的眼神，让我相信这个世界上还有着纯真。",
    "握不住的沙，不如扬了它。",
	"Nothing is true, everything is permitted.",
	"有一种无奈叫做，你明明是只候鸟，却喜欢上只能给你冬天的人。",
	"总有一个人会举着戒指对你笑，说着余生请你多指教。",
	"/*佛祖保佑，永无BUG*/",
	"人生就是一列开往坟墓的列车，路途上会有很多站，很难有人可以自始至终陪着走完。当陪你的人要下车时，即使不舍也该心存感激，然后挥手道别。",
	"我要用什么样的速度，才能与你相遇。",
	"Write the Code. Change the World.",
	"因为失去，所以明白。",
	"学会忘记，懂得放弃。",
	"知识不会给予人幸福,而是智慧。",
	"永远有多远？比时间多一秒就是永远。",
	"所谓的「改变自己，世界就会随之改变」这种事，是不可能的。",
	"相见不如不见，有情还似无情。",
	"d=lim 1/x x->+∞",
	"我的生活就像在白夜里行走。",
	"世上有两样东西不可直视，一是太阳，二是人心。",
	"CO<sub>2</sub>+H<sub>2</sub>O == H<sub>2</sub>CO<sub>3</sub><br>6CO<sub>2</sub>+6H<sub>2</sub>O =光合= C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>+6O<sub>2</sub>↑<br>同样的开始 不同的条件 不同的结局",
	"如果我讨厌她，就不会这么烦恼了!",
	"一生一念·一念一人",
	"hello world",
	"我们都很擅长口是心非，但又希望对方能有所察觉。",
	"败者死于绝望，胜者死于渴望。",
	"All for one, one for all.",
	"呐，知道么，樱花飘落的速度，是每秒五厘米哦~",
	"越是试着忘记，越是记得深刻。",
	"你曾经是谁的英雄呢？",
	"愚昧总是会先压着真理。",
	"仅只一次，万般怜爱。",
	"Across the Great <sub>Fire</sub>Wall, we can reach every corner in the world.",
	"每一次相聚都将是一场离别的盛宴。",
	"往事依旧，物是全非。",
	"成王败寇。",
	"半夜还在Coding的人也是蛮拼的吧...",
	"现实中，有人幸福，就必定有人被抛弃，有人光鲜，就必须有人满身泥泞。",
	"( ⊙ o ⊙ )啊，你在看这条一言",
	"杀了上帝，我就是神！",
	"我本可忍受禁锢，如果我不曾过感受自由",
	"我能遇到你真是太好了!",
	"繁华只是散场的开始。",
	"你知道吗?得不出结果就是所谓的无能。",
	""]
	//use "//" before a line to delete
change.onclick = function(){
/*	list=[];
	if(changes==0){
		document.getElementById("words").innerHTML=;
		document.getElementById("word_holder").className="rin-description";
		last="星河滚烫，你是人间理想";
		changes+changes+1;
	}
	else if(changes==1){
		document.getElementById("words").innerHTML="我在等一个人，等一个我想保护的人";
		document.getElementById("word_holder").className="rin-description-long";
		last="我在等一个人，等一个我想保护的人";
		changes+changes+1;
	}
	else{
		switch(Math.floor(Math.random()*10)){
		case 0:
			content=mywords.at(Math.floor(Math.random()*(mywords.length+1)));
			if(last==content){
			//
			}
			else{
			document.getElementById("words").innerHTML=content;
			last=content;
			}
			break;
		case 1:
			c_json();
			break;
		case 2:
			c_json();
			break;
		case 3:
			c_text();
			break;
		case 4:
			c_text();
			break;
		case 5:
			c_text();
			break;
		case 6:
			c_js();
			break;
		case 7:
			c_js();
			break;
		case 8:
			c_js();
			break;
		case 9:
			c_js();
			break;
			}
		if(content.length>=10){
			document.getElementById("word_holder").className="rin-description-long";
		}
		else{
			document.getElementById("word_holder").className="rin-description";
		}
		}
		changes=changes+1;*/
		content=mywords[Math.floor(Math.random()*(mywords.length))];
		if(last==content){
			//
		}
		else{
			document.getElementById("words").innerHTML=content;
			last=content;
		}
		if(content.length>=15){
			document.getElementById("word_holder").className="rin-description-long";
		}
		else{
			document.getElementById("word_holder").className="rin-description";
		}
}
/*function c_text(){
	var xhr = new XMLHttpRequest; 
	xhr.open("GET", "https://tenapi.cn/yiyan/?format=text",false); 
	xhr.send();
	content=xhr.response;
	if(content.charAt(content.length-1)=="。"){
		for(var i=0;i<content.length-1;i++){
			list.push(content.charAt(i));
		}
		content="";
		for(var i=0;i<list.length;i++){
			content=content+list.at(i);
		}
	}
	else{
		//
	}
	if(last==content){
		//
	}
	else{
		document.getElementById("words").innerHTML=content;
		last=content;
	}
}
function c_json(){
	var xhr = new XMLHttpRequest; 
	xhr.open("GET", "https://tenapi.cn/yiyan/?format=json",false); 
	xhr.send();
	data=JSON.parse(xhr.response);
	content=data.hitokoto;
	if(content.charAt(content.length-1)=="。"){
		for(var i=0;i<content.length-1;i++){
			list.push(content.charAt(i));
		}
		content="";
		for(var i=0;i<list.length;i++){
			content=content+list.at(i);
		}
	}
	else{
		//
	}
	if(last==content){
		//
	}
	else{
		document.getElementById("words").innerHTML=content;
		last=content;
	}

}
function c_js(){
	var xhr = new XMLHttpRequest;
	list=[];
	xhr.open("GET", "https://tenapi.cn/yiyan/?format=js",false); 
	xhr.send();
	content=xhr.response;
	for(var i=0;i<content.length;i++){
		list.push(content.charAt(i));
	}
	var ql = Number(list.indexOf("("))+1;
	var qr = Number(list.lastIndexOf(")"))-1;	//最新修改
	content = "";
	for(var i=0;i<qr-ql-1;i++){
		content=content+list.at(ql+1+i);
	}
	list=[];
	if(content.charAt(content.length-1)=="。"){
	for(var i=0;i<content.length-1;i++){
		list.push(content.charAt(i));
	}
	content="";
	for(var i=0;i<list.length;i++){
		content=content+list.at(i);
	}
	}
	else{
		//
	}
	if(last==content){
		//
	}
	else{
		document.getElementById("words").innerHTML=content;
		last=content;
	}
}*/