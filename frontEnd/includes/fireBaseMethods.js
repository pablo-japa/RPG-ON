import { firebaseConfig, db, app, analytics, auth } from "/frontEnd/includes/fireBaseConfig.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";


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
        });
}

function verifyUserLogged() {
    onAuthStateChanged(auth, (user) => {
        const currentPath = window.location.pathname;

        if (!user && currentPath !== "/frontEnd/modules/login/index.html" && currentPath !== "/frontEnd/modules/novaConta/novaConta.html") {
            setTimeout(() => {
                window.location.href = "/frontEnd/modules/login/index.html";
                loader(false, text);
            }, 1000);
        } else if (user) {
            return;
        }
    });
}

async function searchUserId() {
    let bdConnection = collection(db, "usuarios");
    let user = auth.currentUser.email;
    let queryUser = query(bdConnection, where("usuario_email", "==", user));
    let querySnapshot = await getDocs(queryUser);
    if (!querySnapshot) {
        return "Not Found";
    }
    let userId = ""
    querySnapshot.forEach(doc => {
        userId = doc.id
    });
    return userId;
}

$(document).ready(function () {
    verifyUserLogged()
})


export { verifyUserLogged, searchUserId, logOut }
