 const canvas = document.getElementById('my-canvas');
 const context= canvas.getContext('2d');
 canvas.width=560;
 canvas.height=350;

 const cvW = canvas.width;
 const cvH = canvas.height;
let bX = 50;    //Vi tri ban dau
let bY = cvH/2;

let gravity = 1.5; //Toc do roi
let gap = 85;      //Khoang canh gia 2 cai cot
let minHeightpipe = 20; // Chieu cao vat can lon hon 20

let sum = 0;
let timeRenderPipe = 180;

let pipe =[];


function Component(img,x,y,width,height){
	this.img = img;
	this.x=x;
	this.y=y;
	this.width = width;
	this.height = height;
	this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }

}


Component.prototype.drawImg = function() {
	context.drawImage(this.img, this.x, this.y, this.width, this.height);
 	// body...
 };

 const bg = new Image();
 const pipeSouth = new Image();
 const pipeNorth = new Image();
 const bird = new Image();

 bg.src = "img/background.jpeg";
 pipeSouth.src ='img/pipesouth.png';
 pipeNorth.src ='img/pipenorth.png';
 bird.src = 'img/bird.png';

window.addEventListener('click',handleEventKeyDown)
 window.addEventListener('keydown',handleEventKeyDown);
 function handleEventKeyDown(e){
 	if (bY<0) {
 		bY=0;
 	}
 	bY-=25;
 }

 function update(){

 	const background = new Component(bg,0,0,canvas.width,canvas.height);
 	background.drawImg();
 	const pipeN = new Component(pipeNorth,300,0,50,200);
 	const pipeS = new Component(pipeSouth,300,cvH -100 , 50, 100);

 	const birdF = new Component(bird,bX,bY,50,50);
 	birdF.drawImg();
 	bY += gravity; // roi tu do
 	//tao vat can theo thoi gian
 	sum ++; 
 	if(timeInterval(sum,timeRenderPipe)){
 		const randomHeight = Math.floor(Math.random()*(cvH-gap-50)+minHeightpipe);
 		pipe.push(new Component(pipeNorth,cvW,0,50,randomHeight));
 		pipe.push(new Component(pipeSouth,cvW,randomHeight+gap, 50,cvH-randomHeight-gap));
 	}
 	for(let i=0; i<pipe.length;i++){
 		pipe[i].drawImg();
 		pipe[i].x--;

 	}
 	function timeInterval(sum, time) {

 		if (sum / time % 1 === 0) {

 			return true;

 		} else return false;

 	}
 	requestAnimationFrame(update);
 	if (bird.y>=360||bird.y<=0) {
 		stop();
           }
 }

 update();
 