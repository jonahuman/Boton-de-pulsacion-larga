// hecho por flerkendroid

function myLight() {
$('h1').css({'filter':'grayscale(0%)'});
$("h2").attr("onclick", "myNight()");
    }

function myNight() {
$('h1').css({'filter':'grayscale(100%)'});
$("h2").attr("onclick", "myLight()");
    }
