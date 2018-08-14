//Bai1
//Thay đổi kích thước font chữ của cả 3 đoạn văn thành x pixels (x là một số nguyên).
function changeFontSize(x){
	document.getElementById("p1").style.fontSize = x +"px";
	document.getElementById("p2").style.fontSize = x +"px";
	document.getElementById("p3").style.fontSize = x +"px";
}

//Bai2
//Tăng kích thước font chữ của đoạn văn mong muốn (paragraph) lên 1 pixel so với kích thước hiện tại, kích thước tăng lên không được vượt quá 30 pixels (Sử dụng sau khi gọi hàm changeFontSize()

function increaseFontSize(p){
	var x = document.getElementById(p);
	var size = x.style.fontSize;
	if (parseInt(size) < 30) {
		x.style.fontSize = parseInt(size) + 1 + "px";
	}
}

//Bai3
//Giảm kích thước font chữ của đoạn văn mong muốn (paragraph) xuống 1 pixels so với kích thước hiện tại, kích thước giảm xuống không vượt quá 10 pixels.

function decreaseFontSize(p){
	var y = document.getElementById(p);
	var size = y.style.fontSize;
	if (parseInt(size) > 10) {
		y.style.fontSize = parseInt(size) - 1 + "px";
	}
}

//Bai4

//Đổi màu chữ của 3 đoạn văn theo thứ tự xanh, vàng, đỏ.

function changeColor(){
	document.getElementById("p1").style.color = "green";
	document.getElementById("p2").style.color = "red";
	document.getElementById("p3").style.color = "yellow";
}
changeColor()

//Bai5
//Thay đổi màu nền của trang

function changeBgColor(color){
	document.body.style.backgroundColor = color;
}
changeBgColor("violet");

//Bai6
//Thay đổi nội dung của đoạn 1 giống đoạn p2
function copyContent(paragraph1,paragraph2){
	var p1 = document.getElementById(paragraph1);
	var p2 = document.getElementById(paragraph2);
	p1.innerText = p2.innerText;
}
//copyContent("p1","p2")