$(".page-scroll").on("click", function() {
    
    let href = $(this).attr("href");
    let elemenHref = $(href)
    console.log(elemenHref.offset().top)    
    $('html,body').animate({scrollTop: elemenHref.offset().top - 60 },1000);

    event.preventDefault()
})