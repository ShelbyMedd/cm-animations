
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
    tl.fromTo($background, 0.2,{rotation:0, opacity:0, width: 150, height: 150}, {opacity:1})
        .to($background, 0.2, {opacity:0})
        .to($background, 0.1, {opacity:1, repeat: 6, yoyo:true})
        .to($background, 0.5, {rotation:-360, transformOrigin:"150px 150px"})
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
        .fromTo($c2, 0.3, {y:-150, opacity:0}, {opacity: 1, y:0, ease: Power1.easeOut, onComplete: complete}, '-=0.2');
};


// ANIME.JS ANIMATION

var polyAnimation = anime.timeline();


    polyAnimation
        .add({
            targets: '#poly-background',
            opacity: 1,
            easing: 'linear',
            duration: 200
        })
        .add({
            targets: '#poly-background',
            opacity: 0,
            easing: 'linear',
            duration: 200
        })
        .add({
            targets: '#poly-background',
            opacity: 1,
            easing: 'linear',
            duration: 100
        })
        .add({
            targets: '#poly-background',
            opacity: 0,
            easing: 'linear',
            duration: 100
        })
        .add({
            targets: '#poly-background',
            opacity: 1,
            easing: 'linear',
            duration: 100
        })
        .add({
            targets: '#poly-background',
            opacity: 0,
            easing: 'linear',
            duration: 100
        })
        .add({
            targets: '#poly-background',
            opacity: 1,
            easing: 'linear',
            duration: 100
        })
        .add({
            targets: '#poly-background',
            opacity: 0,
            easing: 'linear',
            duration: 100
        })
        .add({
            targets: '#poly-background',
            opacity: 1,
            easing: 'linear',
            duration: 100
        })
        .add({
            targets: '#poly-background',
            rotate: -360,
            easing: 'linear',
            duration: 500
        })
        .add({
            targets: '#poly-background',
            height: 872.3,
            easing: 'linear',
            duration: 300
        })
        .add({
            targets: '#poly-background',
            width: 4067.1,
            easing: 'linear',
            duration: 500,
            offset: '-=200'
        })
        .add({
            targets: '#poly-c',
            opacity: 1,
            translateY: [-150, 0],
            easing: 'easeOutExpo',
            duration: 300
        })
        .add({
            targets: '#poly-t',
            opacity: 1,
            translateY: [-150, 0],
            easing: 'easeOutExpo',
            duration: 300,
            offset: '-=200'
        })
        .add({
            targets: '#poly-s',
            opacity: 1,
            translateY: [-150, 0],
            easing: 'easeOutExpo',
            duration: 300,
            offset: '-=200'
        })
        .add({
            targets: '#poly-l',
            opacity: 1,
            translateY: [-150, 0],
            easing: 'easeOutExpo',
            duration: 300,
            offset: '-=200'
        })
        .add({
            targets: '#poly-r',
            opacity: 1,
            translateY: [-150, 0],
            easing: 'easeOutExpo',
            duration: 300,
            offset: '-=200'
        })
        .add({
            targets: '#poly-a2',
            opacity: 1,
            translateY: [-150, 0],
            easing: 'easeOutExpo',
            duration: 300,
            offset: '-=200'
        })
        .add({
            targets: '#poly-i',
            opacity: 1,
            translateY: [-150, 0],
            easing: 'easeOutExpo',
            duration: 300,
            offset: '-=200'
        })
        .add({
            targets: '#poly-s2',
            opacity: 1,
            translateY: [-150, 0],
            easing: 'easeOutExpo',
            duration: 300,
            offset: '-=200'
        })
        .add({
            targets: '#poly-i2',
            opacity: 1,
            translateY: [-150, 0],
            easing: 'easeOutExpo',
            duration: 300,
            offset: '-=200'
        })
        .add({
            targets: '#poly-a',
            opacity: 1,
            translateY: [-150, 0],
            easing: 'easeOutExpo',
            duration: 300,
            offset: '-=200'
        })
        .add({
            targets: '#poly-m',
            opacity: 1,
            translateY: [-150, 0],
            easing: 'easeOutExpo',
            duration: 300,
            offset: '-=200'
        })
        .add({
            targets: '#poly-c2',
            opacity: 1,
            translateY: [-150, 0],
            easing: 'easeOutExpo',
            duration: 300,
            offset: '-=200',
            complete: function(anim) {
                $("#polyfill").removeClass('hide');
            }
        });


// CSS ANIMATION ON-CLICK
var cssAnimation = function() {
    $('#css-background').addClass('bg-active');
    $('#css-c').addClass('c-active');
    $('#css-t').addClass('t-active');
    $('#css-s').addClass('s-active');
    $('#css-l').addClass('l-active');
    $('#css-r').addClass('r-active');
    $('#css-a2').addClass('a2-active');
    $('#css-i').addClass('i-active');
    $('#css-s2').addClass('s2-active');
    $('#css-i2').addClass('i2-active');
    $('#css-a').addClass('a-active');
    $('#css-m').addClass('m-active');
    $('#css-c2').addClass('c2-active');
};

$('#keyframe').on("click", function(){
    $("#keyframe").addClass('hide');
    cssAnimation();
});
$("#css-c2").bind('oanimationend animationend webkitAnimationEnd', function() {
    $('#css-background').removeClass('bg-active');
    $('#css-c').removeClass('c-active');
    $('#css-t').removeClass('t-active');
    $('#css-s').removeClass('s-active');
    $('#css-l').removeClass('l-active');
    $('#css-r').removeClass('r-active');
    $('#css-a2').removeClass('a2-active');
    $('#css-i').removeClass('i-active');
    $('#css-s2').removeClass('s2-active');
    $('#css-i2').removeClass('i2-active');
    $('#css-a').removeClass('a-active');
    $('#css-m').removeClass('m-active');
    $('#css-c2').removeClass('c2-active');
    $("#keyframe").removeClass('hide');
});


// GREENSOCK ANIMATION ON-CLICK
$('#greensock').on("click", function(){
    $("#greensock").addClass('hide');
    greensockAnimation();
});

var complete = function () {
    $("#greensock").removeClass('hide');
};

//ANIME.JS ANIMATION ON-CLICK
document.querySelector('#polyfill').onclick = polyAnimation.restart;
$('#polyfill').on("click", function(){
    $("#polyfill").addClass('hide');
});

$(document).ready(function(){
    greensockAnimation();
    cssAnimation();
});