$(function() {
    var idsArr = ["#first", "#second"];

    setInterval(function() {
        if ($("#first").attr("class") === "show") {

            $("#first").removeClass("show");
            $("#first").removeClass("hide");

        } else {
            $("#first").removeClass("hide");
            $("#first").addClass("show");
        }
    }, 1000);
});