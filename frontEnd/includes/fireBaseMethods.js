import { firebaseConfig, db, app, analytics, auth } from "/frontEnd/includes/fireBaseConfig.js";
import { signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";


function logOut() {
    let text = "Executando logout...";
    loader(true, text);
    signOut(auth)
        .then(() => {
            setTimeout(() => {
                window.location.href = "/frontEnd/modules/login/index.html";
                loader(false, text);
            }, 1500);
        })
        .catch((error) => {
            loader(false, text);
            console.log("Erro ao fazer logout:", error);
        });
}

$(document).ready(function () {
    $("#btnLogOut").on('click', function () {
        logOut()
    })
})