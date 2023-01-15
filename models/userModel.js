const mongoose = require("mongoose"); // importation de mongoose

//definition de notre schema de données grace a la methode de mongoose Schema() 
const userSchema = mongoose.Schema({
    name: {
        // Le nom de notre utilisateur devra obligatoirement etre une chaine de caractere
        type: String, 
        /* le nom de l'utilisateur devra obligatoirement etre saisis, si ce n'est pas le cas, 
        une erreur de validation avec le message stipulé a l'index 1 du tableau sera transmise */
        required: [true, "l'utilisateur doit avoir un nom"] 
    },
    firstname: {
        type: String,
        required: [true, "l'utilisateur doit avoir prénom"]
    },
    email: {
        type: String,
        required: [true, "l'utilisateur doit avoir un mail"]
    },
    password: {
        type: String,
        required: [true, "l'utilisateur doit avoir un mot de passe"]
    },
    age: {
        // Le nom de notre utilisateur devra obligatoirement etre un nombre
        type: Number,
        required: [true, "l'utilisateur doit avoir un age"]
    },
    adress: {
        type: String
        //ici, l'attribut required n'est pas présent, car l'adresse n'est pas obligatoire.
    },
})

/* nous creons maintenant notre modele de donnée. grace a la methode model() de mongoose Dans la base, notre collection se nommera "users"
 et se basera sur userSchema pour valider les données 
 */
const userModel = mongoose.model('users',userSchema) 

module.exports = userModel // nous exportons notre modele de donné pour qu'il soit disponible hors de ce fichier