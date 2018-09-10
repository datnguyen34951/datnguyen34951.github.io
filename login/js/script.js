var uri = location.search.substring(1).split("&");
var dulieu = [];
for(var i =0 ; i < uri.length; i++){
    var bang = uri[i].indexOf('=');
    var form = uri[i].slice(bang+1);
    dulieu[i]= decodeURIComponent(form.split("+").join(' '));   
}
var dangky = {
    ten:dulieu[0],
    email:dulieu[1],
    pass:dulieu[2],
    phone:dulieu[3],
    from:dulieu[4],
    day:dulieu[5]+"/"+  dulieu[6]+ "/" + dulieu[7],
    sex:dulieu[8]
}

$('#ten').append('<td>' + dangky['ten'] + '</td>');
$('#email').append('<td>' + dangky['email'] + '</td>');
$('#pass').append('<td>' + dangky['pass'] + '</td>');
$('#phone').append('<td>' + dangky['phone'] + '</td>');
$('#from').append('<td>' + dangky['from'] + '</td>');
$('#day').append('<td>' + dangky['day'] + '</td>');
$('#sex').append('<td>' + dangky['sex'] + '</td>');
