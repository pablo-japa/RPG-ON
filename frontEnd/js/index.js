
$(document).ready(function () {

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

    $('.btnIniciar').on('click', function () {
        let nomeInputElement = $('.nomeInput')
        let senhaInputElement = $('.senhaInput')
        let nomeInputValue = $('.nomeInput').val().toLowerCase()
        let senhaInputValue = $('.senhaInput').val().toLowerCase()
        console.log(nomeInputValue)
        console.log(senhaInputValue)

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
            type: "POST",
            //ORIGEM
            url: "http://localhost:8080/usuarios/todos",
            dataType:"JSON",
            data:{
                usuario_nome: nomeInputValue,
                usuario_senha: senhaInputValue
            },
            success: function (response) {
                console.log("Deu tudo certo")
                window.location.href = "url pós login"
            },
            error: function (error) {

            }
        })
    })

})

//Criação da função da tela de login 