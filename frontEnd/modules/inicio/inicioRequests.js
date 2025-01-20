import { auth, db } from "/frontEnd/includes/fireBaseConfig.js";  // Importa a configuração do Firebase
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { verifyUserLogged, searchUserId } from "/frontEnd/includes/fireBaseMethods.js"

async function searchCreated() {
    //Abaixo, váriaveis que eu utilizo para pegar o usuário logado atual
    let user = auth.currentUser.email
    let type = "mine";

    //Adentro a collection de sessoes_rpg
    let buscaRpgs = collection(db, "sessoes_rpg")
    //Crio a query de consulta
    let rpgQuery = query(buscaRpgs, where("mestre_sessao", "==", user))
    //Crio a var snapshot com um await. chamando a função de getDocs
    //GetDocs:Pega todos os documentos do parametro indicado => rpgQuery
    let querySnapshot = await getDocs(rpgQuery);

    let html = '';

    //Chama a função que cria os cards e insere eles dentro da div
    buildCardSession(querySnapshot, type = "mine");
}

function buildCardSession(documents, type) {
    let html = ""
    //Como a resposta snapShot vem uma array imensa com muitos dados, faço um foreach
    documents.forEach((doc) => {
        //Dentro do snapshot, Faço algumas identificacoes 
        html += `
                        <div class="card estiloCard text-light p-2" id="${doc.id}">
                            <img class="imgBorder" src="${doc.data().img_sessao}" alt="">
                            <div class=" text-center p-1">${doc.data().nome_sessao}</div>
                            <div class="toolsBtns mt-2 pb-2 d-flex justify-content-end gap-2">
                                <button class="btn btn-sm btnEditar"><i class="fa fa-edit"></i></button>
                                <button class="btn btn-sm btnExcluir"><i class="fa fa-trash"></i></button>
                            </div>
                        </div>
                `
    });
    if (type == "participating") {
        $("#otherSessions").append(html);
    } else {
        $("#mySessions").append(html);
    }
}

async function searchRpgs() {
    //Aqui preciso procurar os rpgs anexados ao ID do usuario atual
    let userId = await searchUserId();
    let type = "participating";
    let bdConnection = collection(db, "sessoes_rpg");
    if (!bdConnection) {
        Swal.fire({
            title: 'Erro',
            text: 'Não foi possivel conectar ao banco, tente novamente mais tarde',
            icon: 'error',
        });
        return;
    }
    if (userId == "Not Found") {
        Swal.fire({
            title: 'Erro',
            text: 'Ocorreu um erro, efetue o login novamente',
            icon: 'error',
        });
        return;
    }
    let rpgQuery = query(bdConnection, where("players_sessao", "array-contains", userId));
    let querySnapshot = await getDocs(rpgQuery);
    buildCardSession(querySnapshot, type )
}


$(document).ready(function () {
    let text = "Buscando sessões..."
    loader(true, text)
    verifyUserLogged()
    setTimeout(() => {
        searchCreated()
        searchRpgs()
        loader(false, text = "Buscando sessões...")
    }, 1000);
})