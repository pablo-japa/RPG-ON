
function incluirHeader(header) {
    //Incluir o header
    $.ajax({
        url: "/frontEnd/includes/header.html",
        success: function (response) {
            console.log(response)
            $(`#${header}`).html(response)
        }
    })
}


function todasInclusoes(header, menu, sidePrimaria, SideSegundaria) {
    //Incluir o header
    $.ajax({
        url: "header.html"
    })
}


function redirecCriarConta() {
    window.location.href = "pages/novaConta/novaConta.html"
}