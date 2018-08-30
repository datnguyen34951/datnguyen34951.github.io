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
    }else{
        if (current.attr('data-name') != $(card).attr('data-name')){
            //Khác nhau
            console.log('Khác nhau');
        }else {
            //Giống nhau
            console.log('Giống nhau');
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