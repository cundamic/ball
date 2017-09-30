
var socket = io("ws://ball-pechac.rhcloud.com:8000");
//var socket = io("ws://localhost:8080");
var socket=io();
socket.on("ppri", function(message) {

    $('#ppr').html(message);


});



socket.on("ciel", function(message) {

    $('#Vitaz').html(message); $('#Vitaz').attr('style','visibility:visible');
});
