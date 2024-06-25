document.getElementById("myButton").onclick = function () {
	var count = 0;
	count++;
	if (count % 2 == 0) { 
		document.getElementById("demo").innerHTML = " ";
	} else {
		var img = document.createElement("img");
	img.src = "image/Watchmen_all.jpg"
	document.getElementById("myButton").appendChild(img) 
	}
}