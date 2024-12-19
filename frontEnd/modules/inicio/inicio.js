function montarCards(dados) {
    let html = '';
    dados.forEach(dados => {
        html += `
                    <div class="card estiloCard bg-dark text-light p-2">
                        <img class="imgBorder" src="/frontEnd/src/img/medieval-bg.jpg" alt="">
                        <div class="card-header text-center p-1">OneShot Padrão</div>
                        <div class="toolsBtns mt-2 pb-2 d-flex justify-content-end gap-2">
                            <button class="btn btn-sm btn-primary"><i class="fa fa-check"></i></button>
                            <button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></button>
                        </div>
                    </div>
                `
    });
}

$(document).ready(function () {
    loader(true, text = "Aguarde")
    incluirHeader("header");
    incluirMenu("menu");
    loader(false)
})