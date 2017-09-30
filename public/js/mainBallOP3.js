
var socket = io("http://ball-ball.7e14.starter-us-west-2.openshiftapps.com:8080");
//var socket = io("ws://localhost:8080");
var socket=io();
socket.on("ppri", function(message) {

    $('#ppr').html(message);


});

socket.on("ciel", function(message) {

    $('#Vitaz').html(message); $('#Vitaz').attr('style','visibility:visible');
});
