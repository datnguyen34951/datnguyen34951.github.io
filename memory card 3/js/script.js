var cards = ["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12"];
var current = null;
var count = 0;
const audio = document.getElementById("clickchuot");
const audio1 = document.getElementById("giongnhau");
var audio3 = document.getElementById('modau');
$(document).ready(function(){
    $(".start").click(function(){
        $("#batdau").slideUp("slow");
    });
})
$(document).ready(function(){
    $(".start").click(function(){
        $("#choi").fadeIn(2000);
        document.getElementById('nhacnen').play();
        document.getElementById('modau').pause();
        move();
    });
})

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
function move(){
    var elem = document.getElementById("time");
    var width = 90;
    var id = setInterval (frame,1000);
    function frame(){
        //Cột thời gian
        if(width==0){
            clearInterval(id);
            $("#choi").slideUp('slow');
            $('#thatbai').slideDown('slow');
            document.getElementById('nhacnen').pause();
            document.getElementById('fail').play();
        } else {
            width--;
            elem.style.width = width + "%";
        }
     }
}
function flip(card) {
    $(card).toggleClass('flipped');
    audio.load();
    audio.play();
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
            audio1.load();
            audio1.play();
            $(card).css('transform','scale(0.5)');
            current.css('transform','scale(0.5)');
            $(card).css('visibility','hidden');
            current.css('visibility','hidden');
            current = null;
            count ++;
            //win
            if(count == 12){
            $('body').css("background-image","url(./img/win.gif)")
            $('#snow').remove();
            $("#thatbai").remove();
            $('#choi').remove();
            $("#win").fadeIn('slow');
            audio.pause();
            audio1.pause();
            document.getElementById('nhacnen').pause();
            document.getElementById('phaohoa').play();
            }
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

function autoplay(){
    audio3.autoplay = true;
    audio3.load();
}
autoplay();
$(document).ready(function(){
    $("#choilai").click(function(){
        window.location.reload();
    });
})
