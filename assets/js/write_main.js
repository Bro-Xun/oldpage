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
var tags = [];
var t_s;
var wtf = document.getElementById("wtf");
var preview = document.getElementsByClassName("preview")[0];
var login = document.getElementsByClassName("login")[0];
var User = ""; //!--
var ls = !localStorage;
var _last_edit_time = 0;
//var userId;
/*var xhr=new XMLHttpRequest;
xhr.open("GET","https://diary.hydroxyl-ion.rthe.xyz/",false);
xhr.send();
var dat=JSON.parse(xhr.response);*/
window.onload = function () {
	load_time = new Date();
	document.getElementById("start_time").innerHTML = load_time;
	if (AV.User.current() == null) {
		alert("log in please\nvisitor account:\n UserId:visitor\n 123456");
	}
	else {
		document.getElementById("lgout").style.display = "";
		document.getElementById("lgin").style.display = "none";
		document.getElementsByClassName("glyphicon-log-in1")[0].innerHTML = "欢迎" + AV.User.current().attributes.username + "点击退出登录";
		User = AV.User.current().attributes.username;
	}
}

var _save = document.getElementsByClassName("Save")[0];
_save.onclick = function(){
	var _data = {};
	_data.content = document.getElementById("content").value;
	_data.title = document.getElementById("title").value;
	save_time = new Date();
	_data.time = Number(save_time - load_time) + _last_edit_time;
	localStorage.setItem("_WriteRec",JSON.stringify(_data));
	alert("Successfully Saved.");
}

var _read = document.getElementsByClassName("ReadFromLS")[0];
_read.onclick = function(){
	if(ls){
		alert("Your browser do not support localStorage.\nPlease use a new one like Google Chrome, Microsoft Edge, Firefox, Opera, latest Safari.");
	}
	else{
		var item = localStorage.getItem("_WriteRec");
		if(item != null){
			alert("Head information cleared, recover it yourself. -v-");
			if(confirm("Commit them? All you have written will be cleared without saving.")){
				commit(item);
			}
		}
		else{
			alert("It seems that you have never saved or had lost the file.\nI'm sorry to hear that.");
		}
	}
}

var _out = document.getElementsByClassName("out")[0];
_out.onclick = function(){
	if(ls){
		alert("Your browser do not support localStorage.\nPlease use a new one like Google Chrome, Microsoft Edge, Firefox, Opera, latest Safari.");
	}
	else{
		var item = localStorage.getItem("_WriteRec");
		if(item != null){
			var d = {};
			var datastr = "data:text/json;charset=utf-8," + encodeURIComponent(item);
			var downloadAnchorNode = document.createElement('a')
			downloadAnchorNode.setAttribute("href", datastr);
			downloadAnchorNode.setAttribute("download", JSON.parse(item).title + '_backup.json')
			downloadAnchorNode.click();
			downloadAnchorNode.remove();
		}
		else{
			alert("It seems that you have never saved or had lost the file.\nI'm sorry to hear that.");
		}
	}
}
function commit(item){
	if(typeof(item) == "string"){
		item = JSON.parse(item);
	}
	_last_edit_time = item.time;
	document.getElementById("last_time").innerHTML = String(_last_edit_time/1000/60) + " 分钟";
	document.getElementById("content").value = item.content;
	document.getElementById("title").value = item.title;
	load_time = new Date();
	document.getElementById("start_time").innerHTML = load_time;	
}

var _rf = document.getElementsByClassName("RF")[0];
_rf.onclick = function(){
	var _file = document.getElementsByClassName("file")[0];
	if (_file.files.length === 0) {
		alert("Please select a file.");
	}
	else{
		var reader = new FileReader();
		reader.onload = function(){
			var _result = reader.result;
			if(typeof(_result) == "string"){
				_result = JSON.parse(_result);
			}
			console.log(_result);
			commit(_result);
		}
		reader.readAsText(_file.files[0]);
	}
}

login.onclick = function () {
	var userid = document.getElementById("usid").value;
	var password = document.getElementById("pw").value;
	if (userid != "") {
		AV.User.logIn(userid, password).then((user) => {
			alert("200");
			location.reload();
		}, (error) => {
			AV.User.loginWithEmail(userid,password).then((user) => {
				alert("200");
				location.reload();
			}, (error) => {
				alert("wrong UserId or password");
			});
		});
	}
	else {
		alert("give your UserName or Email Address")
	}

}

document.getElementsByClassName("politics")[0].onclick = function() {
	if(document.getElementsByClassName("politics")[0].checked == true){
		document.getElementsByClassName("pol-r18-holder")[0].style.display = "inline";
	}
	else{
		document.getElementsByClassName("politics-r18")[0].checked = false;
		document.getElementsByClassName("pol-r18-holder")[0].style.display = "none";
	}
}

document.getElementsByClassName("politics-r18")[0].onclick = function() {
	if(document.getElementsByClassName("politics-r18")[0].checked == false){
		document.getElementsByClassName("pol-r18-holder")[0].style.display = "none";
	}
}

function content_change() {
	var title = document.getElementById("title").value;
	if (title == "") {
		title = "未命名文档";
	}
	else {
		//
	}
	document.title = title + "*";
	if (save_once == false) {
		//
	}
	else {
		save = false;
		document.getElementById("saving").value = 0;
	}
}

function pre_save() {		//将关键信息写入all对象
	wtf.disabled = true;
	preview.disabled = true;
	document.getElementsByTagName("textarea")[0].disabled = true;
	document.getElementById("title").disabled = true;
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
	if (save_once == false) {
		save_once = true;
		save = true;
	}
	else {
		save = true;
	}
	document.getElementById("finish_time").innerHTML = save_time;
	i = 0;
	var stop = setInterval("progress_gain(10,10)", 150);
	if (title == undefined || title == "未命名文档") {
		document.title = "未命名文档";
	}
	else {
		document.title = title;
		tags = content.match(/\$[^\$]+\$+/g);
		if (tags == null) {
			tags = ["未指定标签"];
		}
		else {
			for (var i = 0; i < tags.length; i++) {
				tags[i] = tags[i].replace(/\$/g, "");
			}
			console.log(tags);
		}
	}
	wtf.disabled = "";
	preview.disabled = "";
	document.getElementsByTagName("textarea")[0].disabled = "";
	document.getElementById("title").disabled = "";
}

function progress_gain(step, time) {		//将进度条增加
	document.getElementById('saving').value = document.getElementById('saving').value + step;
	i = i + 1;
	if (i >= time - 1) {
		clearInterval(stop);
	}
	else {
		//
	}
}

wtf.onclick = function () {
	pre_save();
	var c11 = document.getElementById("c").checked;
	var f11 = document.getElementById("f").checked;
	zone.set('author', User);///
	var con = marked((content.replace(/\"/g, "'")).replace(/\$[^\$]+\$+/g, "")).replace(/\"/g, "'");
	if(document.getElementsByClassName("politics")[0].checked == true){
		if(document.getElementsByClassName("politics-r18")[0].checked == true){
			con = "<blockquote class='pol-r18-warn'></blockquote>" + con;
		}
		else{
			con = "<blockquote class='pol-warn'></blockquote>" + con;
		}
	}
	else{
		//
	}
	zone.set('content', con);
	zone.set('copyright', c11);
	zone.set('title', title);
	zone.set('tags', tags);
	zone.set('forward', f11);
	zone.set('timestamp', Number(save_time));
	zone.set('edit_time', Number(save_time - load_time) + _last_edit_time);
	//zone.set('',);
	if (AV.User.current() != null) {
		if (private == true) {
			var acl = new AV.ACL();
			acl.setWriteAccess(AV.User.current(), true);
			acl.setReadAccess(AV.User.current(), true);
			zone.setACL(acl);
		}
		else {
			//
		}
		zone.save().then((Zone) => {
			alert("提交成功！");
			console.log('保存成功。objectId：${todo.id}');
			location.reload();
		});
	}
	else {
		alert("please release blog after loading your account\nremmember to save what you\'ve written as we will have this page reloaded after you log in");
	}
}

preview.onclick = function () {
	if (User != "") {
		pre_save();
		var con = marked((content.replace(/\"/g, "'")).replace(/\$[^\$]+\$+/g, "")).replace(/\"/g, "'");
		if(document.getElementsByClassName("politics")[0].checked == true){
			if(document.getElementsByClassName("politics-r18")[0].checked == true){
				con = "<blockquote class='pol-r18-warn'></blockquote>" + con;
			}
			else{
				con = "<blockquote class='pol-warn'></blockquote>" + con;
			}
		}
		all = { author: User, tags: tags, copyright: document.getElementById("c").checked, title: title, timestamp: Number(save_time), edit_time: Number(save_time - load_time), content: con};
		window.open("zdt-temp.html");
	} else {
		//
	}
}

function u() {
	content_edit = document.getElementById("content").value;
	content_edit = content_edit + "![name](url)"
	document.getElementById("content").value = content_edit;
}

function b() {
	content_edit = document.getElementById("content").value;
	content_edit = content_edit + "*text*"
	document.getElementById("content").value = content_edit;
}

function del() {
	content_edit = document.getElementById("content").value;
	content_edit = content_edit + "**text**"
	document.getElementById("content").value = content_edit;
}

function mark() {
	content_edit = document.getElementById("content").value;
	content_edit = content_edit + "<mark></mark>"
	document.getElementById("content").value = content_edit;
}

function blockquote() {
	content_edit = document.getElementById("content").value;
	content_edit = content_edit + "> "
	document.getElementById("content").value = content_edit;
}

function abbr() {
	content_edit = document.getElementById("content").value;
	content_edit = content_edit + "<abbr title=''></abbr>"
	document.getElementById("content").value = content_edit;
}

function p() {
	content_edit = document.getElementById("content").value;
	content_edit = content_edit + "[name](target)"
	document.getElementById("content").value = content_edit;
}

function h4() {
	content_edit = document.getElementById("content").value;
	content_edit = content_edit + "$tag1$ $tag2$ $tag3$"
	document.getElementById("content").value = content_edit;
}

function sub() {
	content_edit = document.getElementById("content").value;
	content_edit = content_edit + "<sub></sub>"
	document.getElementById("content").value = content_edit;
}

function sup() {
	content_edit = document.getElementById("content").value;
	content_edit = content_edit + "<sup></sup>"
	document.getElementById("content").value = content_edit;
}