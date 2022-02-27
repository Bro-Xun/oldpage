// JavaScript Document
var dat = [];
window.onload = function () {
	const zone = new AV.Query('Zone');
	if (window.location.search == "") {
		//
	} else {
		var UsefulRequest = ((window.location.search + "?").split("?")[1] + "&user=BroXun").match(/user=[^>]+/)[0].split("&")[0];
		console.log(UsefulRequest);
		if (UsefulRequest != "") {
			var request = UsefulRequest.split("=")[1];
			zone.equalTo('author', request);
			zone.limit(1000);
			zone.find().then((det) => {
				for (var i = 0; i < det.length; i++) {
					var object = det[i].attributes;
					//var id=det[i].id
					var obj = { author: object["author"], content: object["content"], copyright: object["copyright"], edit_time: object["edit_time"], forward: object["forward"], tags: object["tags"], timestamp: object["timestamp"], title: object["title"], views: object["views"], id: det[i].id }
					dat.push(obj)
				}
				//console.log(det);
				console.log(dat);

				if (det.length == 0) {
					console.info("1");
					document.getElementsByClassName("main")[0].innerHTML = "您请求的对象不存在，换一个试试吧~";
				} else {
					console.info("2");
				}
			});
		} else {
			document.getElementsByClassName("main")[0].innerHTML = "哎呀，您的请求格式似乎不正确呢~";
		}
	}

}

function newpage(list_number) {
	const clickscount = AV.Object.createWithoutData('Zone', dat[list_number].id);
	clickscount.increment('views', 1);
	clickscount.save();
	var data = dat[list_number];
	window.open("zdt.html");
	window.data = data;
	window.id = data.id;
}

function showall() {
	document.getElementById("details").innerHTML = "";
	console.log("cleared")
	for (var i = 0; i < dat.length; i++) {
		var cont = dat[i].content
		if (cont.length < 36) {

		}
		else {
			cont = cont.replace(/<[^>]+>/g, " ").substring(0, 35) + "..."
		}
		document.getElementById("details").innerHTML = document.getElementById("details").innerHTML + "<a OnClick='newpage(" + i + ")'><div class='mdui-card rin-card rin-card-article' style='margin-bottom: 5px;'><div class='rin-article-title'>" + dat[i].title + "</div><div class='rin-article-content'>" + cont + "</div><div class='rin-article-content'>" + getLocalTime(dat[i].timestamp) + "</div></div></a>";
		console.log("item " + i + " pushed: succeed!");
	}
}
function getLocalTime(mS) {
	return new Date(parseInt(mS)).toLocaleString('chinese', { hour12: false }).replace(/:\d{1,2}$/, ' ').replace(/24:/, "00:");
}