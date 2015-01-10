$(document).ready( function(){
	var d = (new Date()).toString()
	$("#status").html(d+":"+d.hashCode());
	chrome.tabs.query(
		{active:true,currentWindow:true},
		function (arrTabs) {
			var url=arrTabs[0].url;
			$("#tab").html(url+":"+url.hashCode());
		}
	);
	//alert((new Date()).toString());
	//chrome.tabs.create({url: 'http://bash.im'});
} );
