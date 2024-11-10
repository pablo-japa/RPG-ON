
$(document).ready(function () {
    incluirHeader("header")

    $('#cadastrarAnchor').on('click', function () {
        Swal.fire({
            title: 'Informação!',
            text: 'Contate o administrador!!',
            icon: 'info',
        })
    })

    $('#olhoAberto').on('click', function () {
        $('#olhoAberto').addClass('d-none')
        $('#olhoFechado').removeClass('d-none')
        $('.senhaInput').attr('type', 'text')
    })

    $('#olhoFechado').on('click', function () {
        $('#olhoFechado').addClass('d-none')
        $('#olhoAberto').removeClass('d-none')
        $('.senhaInput').attr('type', 'password')
    })

    $('#btnConfirmar').on('click', function () {
        let nomeInputElement = $('.nomeInput')
        let senhaInputElement = $('.senhaInput')
        let nomeInputValue = $('.nomeInput').val()
        let senhaInputValue = $('.senhaInput').val()

        if (!nomeInputValue) {
            Swal.fire({
                title: 'Informação!',
                text: 'Preencha o campo "Usuario"!!',
                icon: 'info',
            })
            nomeInputElement.addClass('redTrigger')
            return;
        } if (!senhaInputValue) {
            Swal.fire({
                title: 'Informação!',
                text: 'Preencha o campo "Senha"!!',
                icon: 'info',
            })
            senhaInputElement.addClass('redTrigger')
            return;
        } if (!senhaInputValue || !nomeInputValue) {
            Swal.fire({
                title: 'Informação!',
                text: 'Preencha todos os campos!',
                icon: 'info',
            })
            nomeInputElement.addClass('redTrigger')
            senhaInputElement.addClass('redTrigger')
            return;
        } else {
            nomeInputElement.removeClass('redTrigger')
            senhaInputElement.removeClass('redTrigger')
        }

        // DEPOIS DE TODAS AS VALIDAÇÕES, FAZ O FETCH
        $.ajax({
            type: "GET",
            //ORIGEM
            url: "http://localhost:8080/usuarios/todos",
            data: {
                usuario_nome: nomeInputValue,
                usuario_senha: senhaInputValue
            },
            success: function (response) {
                console.log(response);
                console.log("Deu tudo certo")
                window.location.href = "/pages/inicio/inicio.html"

            },
            error: function (error) {
                console.log(error, "erro caught")
            }
        })
    })

})

//Criação da função da tela de login 