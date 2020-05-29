var event=document.getElementsByClassName("event-box")[0];
var eh=event.outerHTML;
var parent=event.parentNode;
var button=document.createElement("input");
button.type="button";
button.value=pcredivewikiEventHidder_hidden?"显示活动列表":"隐藏活动列表";
button.className="pcbtn";
button.onclick=function(){
	if(parent.contains(event)){
		event.remove();
		button.value="显示活动列表";
	}else{
		parent.insertBefore(event,parent.childNodes[1]);
		button.value="隐藏活动列表";
	}
};
parent.insertBefore(button,parent.firstChild);
if(pcredivewikiEventHidder_hidden){
	event.remove();
}
