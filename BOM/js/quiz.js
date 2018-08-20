
var socauhoi = 0;
var diem = 0;

var tongcauhoi = cauhoi.length;

var content = document.getElementById('content');
var questionEl = document.getElementById('question');
var  opt1 = document.getElementById('rep1');
var  opt2 = document.getElementById('rep2');
var  opt3 = document.getElementById('rep3');
var  opt4 = document.getElementById('rep4');
var win = document.getElementById('win');
var lost = document.getElementById('lost');
var start = document.getElementById("hien");


function back(){
	window.location.href = "index.html";
}
function start1(){
	start.style.display = "none";
	content.style.display = "";
	document.getElementById('start2').autoplay = true;
	document.getElementById('start2').load();
}

function chaycauhoi(cauhoiIndex){
	var q = cauhoi[cauhoiIndex];
	questionEl.textContent = (cauhoiIndex + 1 ) + "." + q.cauhoi;
	opt1.textContent =  q.dapan1;
	opt2.textContent =  q.dapan2;
	opt3.textContent =  q.dapan3;
	opt4.textContent =  q.dapan4;
footer();
}

chaycauhoi(socauhoi);
function loadnext(x){
	console.log(x.value);
	if(x.value == cauhoi[socauhoi].dapandung){
		diem +=1;
	}
	socauhoi++;
	if(socauhoi == tongcauhoi && diem == 5){
		warp.style.display = "none";
		win.style.display = "";
		document.getElementById('end2').autoplay = true;
		document.getElementById('end2').load();
		
	}
	if (socauhoi == tongcauhoi && diem <5) {
		content.style.display = "none";
		lost.style.display = "";
		document.getElementById('end1').autoplay = true;
		document.getElementById('end1').load();
		
		return;
	}
	chaycauhoi(socauhoi);
	footer();
}
function footer(){
	var diemcuoi = document.getElementById("footer");
	diemcuoi.innerHTML = "Trình độ đạt đến :" + (diem) + "/" + tongcauhoi;
}
