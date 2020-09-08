$(document).ready (function() {

    $("button").on("click", function() {
        var colorR = Math.floor((Math.random() * 256));
        var colorG = Math.floor((Math.random() * 256));
        var colorB = Math.floor((Math.random() * 256));
        $("body").css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
    });

});