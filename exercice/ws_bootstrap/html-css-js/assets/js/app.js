$(function() {
    $("#datepicker").datepicker();
});
$(function() {
    $("#datepicker2").datepicker();
});
$(document).ready(function(){
	$('#carouselExampleControls').carousel();
    $('#carouselExampleControls2').carousel();
    $('#carouselExampleControls3').carousel();
    $('#carouselExampleControls4').carousel();
    $('#carouselExampleControls5').carousel();
    $('#carouselExampleControls6').carousel();
    $('#carouselExampleControls7').carousel();
})


/*var voiture = $(".load-more");
var taille = $(window).height();
if ($(window).scrollTop() >= ($(document).height() - $(window).height())){
    $(window).scroll(function(){
    voiture.css('display', 'flex');
})
}*/


var btn = $("#affiche");
var cacher = $(".hidden")
var afficheMoins = $("#affiche-moins")
btn.on('click', function(){
    cacher.css('display', 'flex');
    //btn.one('click', function(){
    //$('.ici').append("<button class='moins'>Afficher moins</button>");
    afficheMoins.css('display', 'flex');

})
afficheMoins.on('click', function(){
    cacher.css('display', 'none');
    afficheMoins.css('display', 'none');

})


