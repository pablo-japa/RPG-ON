//CONSTANTES 
//False = Fechado

let menuStatus = false


function incluirHeader(header) {
    //Incluir o header
    $.ajax({
        url: "/frontEnd/includes/header.html",
        success: function (response) {
            $(`#${header}`).append(response)
        }
    })
}
function incluirMenu(menu) {
    $.ajax({
        url: "/frontEnd/includes/menu.html",
        success: function (response) {
            $(`#${menu}`).html(response);
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

function loader(parameter, texto) {
    if (parameter == false) {
        $("#loader").addClass("loader-hidden")
        $(".textLoader").text(texto)
    }
    if (parameter == true) {
        $("#loader").removeClass("loader-hidden")
        $(".textLoader").text(texto)
    }
}


//Para fazer mostrar os itens da side nav Menu


$(document).on('click', '.btnMenu', function () {

    let item = $("#menu");
    let textHidden = $(".nomeItemLista");
    let itemLista = $(".listItem");
    let menuTitle = $(".menuTitle");

    if (menuStatus == false) {
        item.addClass("openMenuSide");
        itemLista.addClass("itemAlign")
        textHidden.show("fast")
        menuTitle.show("fast")
        menuStatus = true
        return;
    }
    if (menuStatus == true) {
        item.removeClass("openMenuSide");
        textHidden.hide("fast")
        itemLista.removeClass("itemAlign");
        menuTitle.hide("fast")
        menuStatus = false
        return;
    }

})

