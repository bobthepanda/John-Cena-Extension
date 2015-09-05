chrome.extension.sendMessage({}, function(response) {

	//Autoplay John Cena theme music.
	var audioElement = document.createElement('audio');
	audioElement.setAttribute('src', 'https://memberfiles.freewebs.com/20/20/67812020/podcast/John%20Cena%20-%20Your%20time%20is%20up.mp3');
	audioElement.load()
	audioElement.addEventListener("load", function() { 
  	audioElement.play(); 
	}, true);

	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// Walk through all the nodes to get all image nodes.
        // Thanks to: http://stackoverflow.com/a/5904945
        // and also: http://stackoverflow.com/a/9452386
        var images = document.querySelectorAll("img");

        // Replace all images with a picture of John Cena.
        for (var i = 0; i < images.length; ++i) {
 			var element = images[i];  // Calling myNodeList.item(i) isn't necessary in JavaScript
 			element = element.setAttribute("src","https://i.ytimg.com/vi/39synwknnGA/maxresdefault.jpg");
		}		

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

	}
	}, 10);
});