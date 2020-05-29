chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.sync.set({pcredivewikiEventHidder_hidden: true}, function() {
		console.log("Hidden set to TRUE.");
	});
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'developer.chrome.com'},
				})
			],
            actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'pcredivewiki.tw'},
				})
			],
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
    });
});
chrome.webNavigation.onCompleted.addListener(function() {
	chrome.storage.sync.get(['pcredivewikiEventHidder_hidden'], function(result) {
		console.log("Hidden set to "+result.pcredivewikiEventHidder_hidden);
		chrome.tabs.executeScript(null, {
			code: "var pcredivewikiEventHidder_hidden="+result.pcredivewikiEventHidder_hidden+";"
		}, function() {
			chrome.tabs.executeScript(null, {
				file: "injection.js"
			}, function() {
				console.log("PCRedive Wiki Event Hidder is working");
			});
		});
	});	
}, {url: [{urlMatches : "https://pcredivewiki.tw/"}]});