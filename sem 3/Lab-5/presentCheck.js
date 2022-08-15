createInput(101,165);
createInput(201,285);
createInput(301,363);
function createInput(start,end) {
	temp=document.getElementById('inp');
	for (var i = start; i <= end; i++) {
		inp=document.createElement("input");
		lb=document.createElement("label");
		inp.id=i;
		inp.value=0;
		inp.type="checkbox";
		inp.addEventListener("click", check)
		lb.innerHTML=i+"<br>";
		temp.appendChild(inp);
		temp.appendChild(lb);
	}
}
function check() {
	temp=document.getElementsByTagName('input');
	div_body=document.getElementById("absentBox");
	div_body.innerHTML=""
	for (var i = 0; i < temp.length; i++)
		if(temp[i].checked==false)
			div_body.innerHTML+=temp[i].id + ", ";
}
function unCheckAll() {
	temp=document.getElementsByTagName('input');
		for (var i = 0; i < temp.length; i++)
			temp[i].checked=false;
	check();
}
function checkAll() {
	temp=document.getElementsByTagName('input');
		for (var i = 0; i < temp.length; i++)
			temp[i].checked=true;
	div_body=document.getElementById("absentBox").innerHTML="";
}