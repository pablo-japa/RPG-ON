
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
})
