colorcod=[];
for (var i = 65; i <=69 ; i++)
	colorcod[i-65]=String.fromCharCode(i);
for (var i = 0; i < 10; i++)
	colorcod.push(i);
function randomcolor(){
	str="#";
	for (var i = 0; i < 6; i++)
		str+=colorcod[Math.floor(Math.random()*colorcod.length)];
	return str;
}