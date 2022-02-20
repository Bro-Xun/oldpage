// JavaScript Document
var dat=[];
window.onload = function(){
	const zone = new AV.Query('Zone');
	zone.equalTo('author', 'Hydi');
	zone.limit(1000);
	zone.find().then((det) => {
		for (var i = 0; i < det.length; i++){
			var object = det[i].attributes;
			//var id=det[i].id
			var obj={author:object["author"],content:object["content"],copyright:object["copyright"],edit_time:object["edit_time"],forward:object["forward"],tags: object["tags"],timestamp:object["timestamp"],title:object["title"],views:object["views"],id:det[i].id}
			dat.push(obj)
		}
		//console.log(det);
		console.log(dat);
	});
}

function newpage(list_number){
	const clickscount = AV.Object.createWithoutData('Zone', dat[list_number].id);
	clickscount.increment('views',1);
	clickscount.save();
	var data = dat[list_number];
	window.open("zdt.html");
	document.getElementById("ti").innerHTML=data["title"];
	document.getElementById("detd").innerHTML="作者: "+data["author"]+" "+"标签: "+data["tags"]+" "+"时间: "+Math.floor((data["edit_time"])/6000)/10+"分钟"+" "+"日期: "+getLocalTime(data["timestamp"])+" "+data["views"]+"阅读（重复统计）"
	document.getElementById("co").innerHTML=data["content"];
	window.data = data;
	window.id = data.id;
}

function showall(){
		document.getElementById("details").innerHTML="";
		console.log("cleared")
	for(var i=0;i<dat.length;i++){	
		var cont = dat[i].content
		if (cont.length < 36){

		}
		else{
			cont = cont.replace(/<[^>]+>/g," ").substring(0,35) + "..."
		}
		document.getElementById("details").innerHTML=document.getElementById("details").innerHTML+"<a OnClick='newpage(" + i + ")'><div class='mdui-card rin-card rin-card-article' style='margin-bottom: 5px;'><div class='rin-article-title'>"+dat[i].title+"</div><div class='rin-article-content'>"+ cont +"</div><div class='rin-article-content'>"+getLocalTime(dat[i].timestamp)+"</div></div></a>";
		console.log("item "+i+" pushed: succeed!");
	}
}
function getLocalTime(mS) {     
   return new Date(parseInt(mS)).toLocaleString('chinese',{hour12:false}).replace(/:\d{1,2}$/,' ').replace(/24:/,"00:");     
}