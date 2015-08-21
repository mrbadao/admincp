/**
 * Created by HieuNguyen on 7/22/2015.
 */

var option = {
    "margin-top": 0
};

$(window).load(function () {
    alert($(window).width());
    resizeGallerySlide(".gallery-slideshow", $("#navbar-wrapper").innerHeight());

});

$(window).resize(function () {
    resizeGallerySlide(".gallery-slideshow", $("#navbar-wrapper").innerHeight());
});

$(function () {

});


function styleGallerySlide(element, option) {
    option["margin-top"] = $("#navbar-wrapper").innerHeight() + "px";

}

function resizeGallerySlide(element, subHeight, option) {
    option["margin-top"] = subHeight + "px";
    $(element).css(option);

    var height = $(window).innerHeight() - subHeight;
    var width = $(element).width();

    $(element).height(height);
}