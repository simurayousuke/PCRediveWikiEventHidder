var spanStatus=document.getElementById("status")
var spanStatus2=document.getElementById("status2")
var button=document.getElementById('switch');
var button2=document.getElementById('switch2');
var boolStatus,boolStatus2;
chrome.storage.sync.get(['pcredivewikiEventHidder_hidden'], function(result) {
	boolStatus=result.pcredivewikiEventHidder_hidden;
    console.log("Hidden set to "+boolStatus);
	if(boolStatus){
		spanStatus.innerText="已开启";
		button.value="关闭自动隐藏";
	}else{
		spanStatus.innerText="已关闭";
		button.value="开启自动隐藏";
	}
	button.disabled=false;
});
chrome.storage.sync.get(['pcredivewikiEventHidder_t2s'], function(result) {
	boolStatus2=result.pcredivewikiEventHidder_t2s;
    console.log("T2S set to "+boolStatus2);
	if(boolStatus2){
		spanStatus2.innerText="已开启";
		button2.value="关闭自动隐藏";
	}else{
		spanStatus2.innerText="已关闭";
		button2.value="开启自动隐藏";
	}
	button2.disabled=false;
});
button.onclick=function(){
	button.disabled=true;
	button.value="设置中";
	spanStatus.innerText="设置中";
	boolStatus=!boolStatus;
	chrome.storage.sync.set({pcredivewikiEventHidder_hidden: boolStatus}, function() {
      console.log("Hidden set to "+boolStatus);
	  button.value=boolStatus?"关闭自动隐藏":"开启自动隐藏";
	  spanStatus.innerText=boolStatus?"已开启":"已关闭";
	  button.disabled=false;
	  alert("设置成功，请刷新页面");
    });
};
button2.onclick=function(){
	button2.disabled=true;
	button2.value="设置中";
	spanStatus2.innerText="设置中";
	boolStatus2=!boolStatus2;
	chrome.storage.sync.set({pcredivewikiEventHidder_t2s: boolStatus2}, function() {
      console.log("T2S set to "+boolStatus2);
	  button2.value=boolStatus2?"关闭自动隐藏":"开启自动隐藏";
	  spanStatus2.innerText=boolStatus2?"已开启":"已关闭";
	  button2.disabled=false;
	  alert("设置成功，请刷新页面");
    });
};