var cargar = function(){
	var $enlaces = $("a");
	$enlaces.each(iterar);
}
var iterar = function(indice, elemento){
		var url = $(elemento).attr("href");
		var imgYoutube = youtube.generateThumbnailUrl(url);
		var imgNueva = $("<img>");
		imgNueva.attr("src",imgYoutube);
		$(elemento).append(imgNueva);
	}
$(document).ready(cargar);
