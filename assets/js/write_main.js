// JavaScript Document
var load_time;
var content_edit;
var save = false;
var save_once = false;
var content;
//var mood;
var private;
var title;
var save_time;
//var week;
var all = {};
var i;
var long_date;
var t_h;
var t_m;
var tags=[];
var t_s;
var wtf = document.getElementById("wtf")
//var userId;
/*var xhr=new XMLHttpRequest;
xhr.open("GET","https://diary.hydroxyl-ion.rthe.xyz/",false);
xhr.send();
var dat=JSON.parse(xhr.response);*/
function content_change(){
	var title=document.getElementById("title").value;
		if(title==""){
			title="未命名文档";
		}
		else{
			//
		}
		document.title=title+"*";
	if (save_once==false){
		
	}
	else{
		save = false;
		document.getElementById("saving").value=0;
	}
}
function pre_save(){		//将关键信息写入all对象
	private = document.getElementById("private").checked;
	//mood = document.getElementById("mood").value;
	title = document.getElementById("title").value;
	content = document.getElementById("content").value;
	save_time = new Date();
	/*var exact_date = String(save_time.getFullYear())+"年"+String(save_time.getMonth()+1)+"月"+String(save_time.getDate())+"日";
	if(save_time.getHours()<10){
		t_h="0"+String(save_time.getHours());
	}
	else{
		t_h=String(save_time.getHours());
	}
	if(save_time.getMinutes()<10){
		t_m="0"+String(save_time.getMinutes());
	}
	else{
		t_m=String(save_time.getMinutes());
	}
	if(save_time.getSeconds()<10){
		t_s="0"+String(save_time.getSeconds());
	}
	else{
		t_s=String(save_time.getSeconds());
	}
	long_date=exact_date+" "+t_h+":"+t_m+":"+t_s//+" "+userId;
	switch (save_time.getDay()) {
    case 0:
        week = "星期天";
        break;
    case 1:
        week = "星期一";
         break;
    case 2:
        week = "星期二";
         break;
    case 3:
        week = "星期三";
         break;
    case 4:
        week = "星期四";
         break;
    case 5:
        week = "星期五";
         break;
    case 6:
        week = "星期六";
	}*/
	//all = {timestamp:save_time.getTime(),time_start:load_time.getTime(),Date:exact_date,week_name:week,private:private,mood:mood,title:title,content:""};
	if (save_once==false){
		save_once = true;
		save = true;
	}
	else{
		save = true;
	}
	document.getElementById("finish_time").innerHTML = save_time;
	i=0;
	var stop = setInterval("progress_gain(10,10)",150);
	if(title==undefined||title=="未命名文档"){
		document.title="未命名文档";
	}
	else{
		document.title=title;
		tags=content.match(/\$[^\$]+\$+/g);
		if(tags==null){
			tags=["未指定标签"];
		}
		else{
			for (var i=0;i<tags.length;i++){
         	tags[i]=tags[i].replace(/\$/g,"");
         	}
        	console.log(tags);
		}
	}
}
function progress_gain(step,time){		//将进度条增加
	document.getElementById('saving').value = document.getElementById('saving').value + step;
	i=i+1;
	if (i>=time-1){
		clearInterval(stop);
	}
	else{
		//
	}
}
wtf.onclick = function(){
	pre_save();
	var c11 = document.getElementById("c").checked;
	var f11 = document.getElementById("f").checked;
	zone.set('author','Hydi');///
	zone.set('content',marked((content.replace(/\"/g,"'")).replace(/\$[^\$]+\$+/g,"")).replace(/\"/g,"'"));
	zone.set('copyright',c11);
	zone.set('title',title);
	zone.set('tags',tags);
	zone.set('forward',f11);
	zone.set('timestamp',Number(save_time));
	zone.set('edit_time',Number(save_time-load_time));
	//zone.set('',);
	zone.save().then((Zone) => {
		alert("提交成功！");
		console.log('保存成功。objectId：${todo.id}');
		location.reload();
	});
}
function get_time(){		//进入时获取时间
	load_time = new Date();
	document.getElementById("start_time").innerHTML = load_time;
}
function u(){
	content_edit = document.getElementById("content").value;
	content_edit = content_edit + "![name](url)"
	document.getElementById("content").value = content_edit;
}
function b(){
	content_edit = document.getElementById("content").value;
	content_edit = content_edit + "*text*"
	document.getElementById("content").value = content_edit;
}
function del(){
	content_edit = document.getElementById("content").value;
	content_edit = content_edit + "**text**"
	document.getElementById("content").value = content_edit;
}
function mark(){
	content_edit = document.getElementById("content").value;
	content_edit = content_edit + "<mark></mark>"
	document.getElementById("content").value = content_edit;
}
function blockquote(){
	content_edit = document.getElementById("content").value;
	content_edit = content_edit + "> "
	document.getElementById("content").value = content_edit;
}
function abbr(){
	content_edit = document.getElementById("content").value;
	content_edit = content_edit + "<abbr title=''></abbr>"
	document.getElementById("content").value = content_edit;
}
function p(){
	content_edit = document.getElementById("content").value;
	content_edit = content_edit + "[name](target)"
	document.getElementById("content").value = content_edit;
}
function h4(){
	content_edit = document.getElementById("content").value;
	content_edit = content_edit + "$tag1$ $tag2$ $tag3$"
	document.getElementById("content").value = content_edit;
}
function sub(){
	content_edit = document.getElementById("content").value;
	content_edit = content_edit + "<sub></sub>"
	document.getElementById("content").value = content_edit;
}
function sup(){
	content_edit = document.getElementById("content").value;
	content_edit = content_edit + "<sup></sup>"
	document.getElementById("content").value = content_edit;
}