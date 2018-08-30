var cards = ["a1","a2","a3","a4","a5","a6","a7","a8","a9"];
var current = null;


function shuffle(array){
    var currentIndex = array.length, temporaryValue, randomIndex;
    //Tạo random
    while(0 !== currentIndex){
        //Chọn phần tử
        randomIndex=Math.floor(Math.random()* currentIndex);
        currentIndex-=1;
        //Cho nó random vs phần tử khác
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
function flip(card) {
    $(card).toggleClass('flipped');
    
    if(!current){
        current = $(card);
        $(current).css('pointer-events','none');
        
    }else{
        
        if (current.attr('data-name') != $(card).attr('data-name')){
            $('.cards').css('pointer-events','none');
            //Khác nhau
            setTimeout(function(){
            console.log('Khác nhau');
            current.toggleClass('flipped');
            $(card).toggleClass('flipped');
            current = null;
            $('.cards').css('pointer-events','auto');
        }, 500);
       

        }else {
            //Giống nhau
            setTimeout(function(){
            console.log('Giống nhau');
            document.getElementById("giongnhau").play();
            $(card).css('opacity','0');
            current.css('opacity','0');
            $(card).css('visibility','hidden');
            current.css('visibility','hidden');
            current = null;
           
        },300);
        }
    }
};
$(document).ready(function(){
    cards = cards.concat(cards); // nhân đôi lá bài
    cards = shuffle(cards); // Tạo random các lá bài
 //Chèn nội dung
var html = "";
for (var i = 0;i<cards.length;i++){
    html+="<div class='gird'>"+
     '<div class = "cards" data-name="' + cards[i] + '" onclick="flip(this)">' +
     '<div class = "truoc"><img src = "./img/truoc.png"/></div>' +
     '<div class = "sau"><img src = "./img/'+ cards[i] + '.jpg"/></div>' + '</div></div>';}
$('.content').html(html);

});