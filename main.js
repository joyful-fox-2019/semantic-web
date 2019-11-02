function loading() {
    $(window).on('load', function () {
        $('#overlay').fadeOut(2000, function () {
            $('.welcome').fadeIn(1000)
            $('.page-footer').fadeIn(1000)
        });
    })
}

$(document).ready(function () {
    loading()
    $('#songContainer').hide()
    $('#foodContainer').hide()
    $('.welcome').hide()
    $('.page-footer').hide()
    $(".nav .nav-link").on("click", function () {
        $(".nav").find(".active").removeClass("active")
        $(this).addClass("active")
    })
    $('#home').on('click', function (event) {
        event.preventDefault()
        $('.welcome').show()
        $('#songContainer').hide()
        $('#foodContainer').hide()
        $('.page-footer').show()
    })

    $('.songs').on('click', function (event) {
        event.preventDefault()
        $('.welcome').hide()
        $('#songContainer').show()
        $('#foodContainer').hide()
        $('.collapsible').collapsible();
        $('.page-footer').css('margin-top', '13.5%')
    })

    $('.food').on('click', function (event) {
        event.preventDefault()
        $('.welcome').hide()
        $('#songContainer').hide()
        $('#foodContainer').show()
        $('.collapsible').collapsible();
        $('.page-footer').css('margin-top', '13.5%')
    })
})