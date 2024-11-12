
function incluirHeader(header) {
    //Incluir o header
    $.ajax({
        url: "/frontEnd/includes/header.html",
        success: function (response) {
            console.log(response)
            $(`#${header}`).append(response)
        }
    })
}
function todasInclusoes(header, menu, sidePrimaria, SideSegundaria) {
    //Incluir o header
    $.ajax({
        url: "/frontEnd/includes/header.html",
        success: function (response) {
            $(`#${header}`).html(response)
        }
    })
}
function redirecCriarConta() {
    window.location.href = "pages/novaConta/novaConta.html"
}

