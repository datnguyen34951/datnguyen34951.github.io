
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

function back(){
	window.location.href = "index.html";
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
	}
	if (socauhoi == tongcauhoi && diem <5) {
		content.style.display = "none";
		lost.style.display = "";
		return;
	}
	chaycauhoi(socauhoi);
	footer();
}
function footer(){
	var diemcuoi = document.getElementById("footer");
	diemcuoi.innerHTML = "Trình độ đạt đến :" + (diem) + "/" + tongcauhoi;
}
