$("#judul b").on({
    mouseleave: function () {
        $(this).css("color", "white");
        $(this).css("width", "100px");
    },
    mouseenter: function () {
        $(this).css("color", "blue");
        $(this).css("width", "30px");
    },
})