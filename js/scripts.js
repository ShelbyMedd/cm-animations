
//GREENSOCK ANIMATION
var tl = new TimelineLite();

var $background = $('#background');
var $c = $('#c');
var $r = $('#r');
var $i = $('#i');
var $t = $('#t');
var $i2 = $('#i2');
var $c2 = $('#c2');
var $a = $('#a');
var $l = $('#l');
var $m = $('#m');
var $a2 = $('#a2');
var $s = $('#s');
var $s2 = $('#s2');

var greensockAnimation = function() {
    tl.fromTo($background, 0.2,{opacity:0, width: 150, height: 150}, {opacity:1})
        .to($background, 0.2, {opacity:0})
        .to($background, 0.1, {opacity:1})
        .to($background, 0.1, {opacity:0})
        .to($background, 0.1, {opacity:1})
        .to($background, 0.1, {opacity:0})
        .to($background, 0.1, {opacity:1})
        .to($background, 0.1, {opacity:0})
        .to($background, 0.1, {opacity:1})
        .to($background, 0.3, {height: 872.3})
        .to($background, 0.5, {width: 4067.1}, '-=0.2')
        .fromTo($c, 0.3, {y:-150, opacity:0}, {opacity: 1, y:0, ease: Power1.easeOut})
        .fromTo($t, 0.3, {y:-150, opacity:0}, {opacity: 1, y:0, ease: Power1.easeOut}, '-=0.2')
        .fromTo($s, 0.3, {y:-150, opacity:0}, {opacity: 1, y:0, ease: Power1.easeOut}, '-=0.2')
        .fromTo($l, 0.3, {y:-150, opacity:0}, {opacity: 1, y:0, ease: Power1.easeOut}, '-=0.2')
        .fromTo($r, 0.3, {y:-150, opacity:0}, {opacity: 1, y:0, ease: Power1.easeOut}, '-=0.2')
        .fromTo($a2, 0.3, {y:-150, opacity:0}, {opacity: 1, y:0, ease: Power1.easeOut}, '-=0.2')
        .fromTo($i, 0.3, {y:-150, opacity:0}, {opacity: 1, y:0, ease: Power1.easeOut}, '-=0.2')
        .fromTo($s2, 0.3, {y:-150, opacity:0}, {opacity: 1, y:0, ease: Power1.easeOut}, '-=0.2')
        .fromTo($i2, 0.3, {y:-150, opacity:0}, {opacity: 1, y:0, ease: Power1.easeOut}, '-=0.2')
        .fromTo($a, 0.3, {y:-150, opacity:0}, {opacity: 1, y:0, ease: Power1.easeOut}, '-=0.2')
        .fromTo($m, 0.3, {y:-150, opacity:0}, {opacity: 1, y:0, ease: Power1.easeOut}, '-=0.2')
        .fromTo($c2, 0.3, {y:-150, opacity:0}, {opacity: 1, y:0, ease: Power1.easeOut}, '-=0.2');
};
var cssAnimation = function() {
    $('#css-background').toggleClass('bg-active');
    $('#css-c').toggleClass('c-active');
    $('#css-t').toggleClass('t-active');
    $('#css-s').toggleClass('s-active');
    $('#css-l').toggleClass('l-active');
    $('#css-r').toggleClass('r-active');
    $('#css-a2').toggleClass('a2-active');
    $('#css-i').toggleClass('i-active');
    $('#css-s2').toggleClass('s2-active');
    $('#css-i2').toggleClass('i2-active');
    $('#css-a').toggleClass('a-active');
    $('#css-m').toggleClass('m-active');
    $('#css-c2').toggleClass('c2-active');


};

$('#greensock').on("click", function(){
    greensockAnimation();
});

$('#keyframe').on("click", function(){

    cssAnimation();
});


$(document).ready(function(){
    greensockAnimation();
    cssAnimation();
});