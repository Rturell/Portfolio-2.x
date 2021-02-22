///ESCONDER MENÚ AL HACER CLICK///

$(document).on('click', function () {
    $('.collapse').collapse('hide');
})

///Agrega la clase Active al menú seleccionado ///

$(document).ready(function () {
    $(".nav-item").click(function () {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });
});