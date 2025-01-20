import { auth, db } from "/frontEnd/includes/fireBaseConfig.js";  // Importa a configuração do Firebase
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { verifyUserLogged, searchUserId } from "/frontEnd/includes/fireBaseMethods.js"