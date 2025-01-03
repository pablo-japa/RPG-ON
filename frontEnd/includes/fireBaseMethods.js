import { firebaseConfig, db, app, analytics, auth } from "/frontEnd/includes/fireBaseConfig.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";


function logOut() {
    let text = "Executando logout...";
    loader(true, text);
    signOut(auth)
        .then(() => {
            setTimeout(() => {
                window.location.href = "/frontEnd/modules/login/index.html";
                loader(false, text);
            }, 1000);
        })
        .catch((error) => {
            loader(false, text);
            console.log("Erro ao fazer logout:", error);
        });
}

function verificaUsuarioLogado() {
    onAuthStateChanged(auth, (user) => {
        const currentPath = window.location.pathname;

        if (!user && currentPath !== "/frontEnd/modules/login/index.html" && currentPath !== "/frontEnd/modules/novaConta/novaConta.html") {
            setTimeout(() => {
                window.location.href = "/frontEnd/modules/login/index.html";
                loader(false, text);
            }, 1000);
        } else if (user) {
            console.log("Usuário logado:", user);
            return;
        }
    });
}

$(document).ready(function () {

    $("#btnLogOut").on('click', function () {
        logOut()
    })
    verificaUsuarioLogado()
})

