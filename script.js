$(document).ready( () => {
    $("#about").hide()
    $("#contact").hide()
    $("#portofolio").hide()
})

function showAbout (){
    $("#about").show()
    $("#contact").hide()
    $("#portofolio").hide()
}

function showContact() {
    $("#about").hide()
    $("#contact").show()
    $("#portofolio").hide()
}

function showPortofolio() {
    $("#about").hide()
    $("#contact").hide()
    $("#portofolio").show()
}