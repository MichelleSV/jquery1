var cargar = function() {
	var links = document.getElementsByTagName("a");
	for(var i=0; i<links.length;i++){
		var url = links[i].getAttribute("href");
		var imgYoutube = youtube.generateThumbnailUrl(url);
		var imgNueva = document.createElement("img");
		imgNueva.setAttribute("src", imgYoutube);
		links[i].appendChild(imgNueva);
	}
}
window.addEventListener("load",cargar);
