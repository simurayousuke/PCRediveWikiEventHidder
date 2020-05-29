var spanStatus=document.getElementById("status")
var button=document.getElementById('switch');
var boolStatus;
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
    });
};