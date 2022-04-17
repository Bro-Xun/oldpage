// JavaScript Document
var dat = [];
var user = "";
var intag = false; //invalid tag
var tagname = "";

function findtag(dataarr, taag) {
	var back = [];
	if (dataarr != [] && dataarr != undefined) {
		for (var i = 0; i < dataarr.length; i++) {
			if ((dataarr[i].tags).includes(taag)) {
				back.push(dataarr[i]);
			}
			if (back.length != 0) {
				intag = true;
			}
			else {
				intag = false;
			}
		}
		return back;
	}
	else {
		intag = true;
		return [];
	}
}

window.onload = function () {
	if (!window.localStorage) { }
	else {
		const zone = new AV.Query('Zone');
		if (window.location.search == "") {
			//
		} else {
			var UsefulRequest = ((window.location.search + "?").split("?")[1] + "&user=BroXun").match(/user=[^>]+/)[0].split("&")[0];
			console.log(UsefulRequest);
			if (UsefulRequest != "") {
				if (Date.now() - Number(localStorage.getItem(UsefulRequest + "_update")) >= 90 * 1000) {
					var request = UsefulRequest.split("=")[1];
					zone.equalTo('author', request);
					zone.limit(1000);
					// 按 createdAt 降序排列
					zone.descending('createdAt');
					zone.find().then((det) => {
						for (var i = 0; i < det.length; i++) {
							var object = det[i].attributes;
							//var id=det[i].id
							var obj = { author: object["author"], content: object["content"], copyright: object["copyright"], edit_time: object["edit_time"], forward: object["forward"], tags: object["tags"], timestamp: object["timestamp"], title: object["title"], views: object["views"], id: det[i].id }
							dat.push(obj);
						}
						//console.log(det);
						console.log(dat);
						localStorage.setItem(UsefulRequest + "_zd", JSON.stringify(dat));
						localStorage.setItem(UsefulRequest + "_update", Date.now())
						console.log("11");
						user = request;
						if (det.length == 0) {
							console.info("1");
							document.getElementsByClassName("main")[0].innerHTML = "您请求的对象不存在，换一个试试吧~";
						} else {
							console.info("2");
						}
					});
					console.log("s1");
				}
				else {
					var request = UsefulRequest.split("=")[1];
					user = request;
					dat = JSON.parse(localStorage.getItem(UsefulRequest + "_zd"));
					console.log("s2");
				}
				console.log("ss1");
			} else {
				document.getElementsByClassName("main")[0].innerHTML = "哎呀，您的请求格式似乎不正确呢~";
			}
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
	var TagsRequest = ((window.location.search + "?").split("?")[1] + "&tag=none").match(/tag=[^>]+/)[0].split("&")[0];
	if (TagsRequest != "" && TagsRequest != null && TagsRequest != "tag=none") {
		var tagrequest = decodeURI(TagsRequest.split("=")[1]);
		dat = findtag(dat, tagrequest);
		tagname = tagrequest;
	}

	if (intag) {
		document.getElementsByClassName("main")[0].innerHTML = "搜寻标签 " + tagname;
		document.title += " | fetch tag " + tagname;
		document.getElementsByClassName("bx-exit")[0].style.display = "block";
		document.getElementsByClassName("bx-exit")[0].href = "//" + window.location.host + window.location.pathname + "?user=" + user;
	}
	else {
		document.getElementsByClassName("bx-exit")[0].style.display = "none";
	}
	document.getElementsByClassName("bx-title")[0].innerHTML = document.getElementsByClassName("bx-title")[0].innerHTML.replace("anyone", user + " ");
	document.getElementById("details").innerHTML = "";
	console.log("cleared");
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