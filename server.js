const express = require("express") // import de la librarie express
const mongoose = require("mongoose") // import de la librarie mongoose
const userRouter = require("./routes/userRouter")
const port = 3000 // definition du port d'écoute du serveur 
const db = "mongodb://localhost:27017/apiuser" // uri de ma base de donnée locale
const app = express() // demarage d'une instance d'express.

app.use(express.json())
app.use(userRouter)
/*
app.listen est une methode d'express, qui permet de specifier un port d'ecoute pour notre application en premier parametre, en deuxieme parametre, 
elle prend une fonction callback qui a pour but d'afficher une erreur si il y en a une, sinon, j'affiche un message de reussite. 
*/
app.listen(port,(err)=>{ 
    if (err) {
        console.log(err);
    }else{
        console.log(`connecté au serveur sur le port ${port}`);
    }
})

/*Lorsque l'option strictQuery est définie sur true ,
 Mongoose s'assurera que seuls les champs spécifiés dans votre schéma seront enregistrés
dans la base de données et que tous les autres champs ne seront pas enregistrés 
(si d'autres champs sont envoyés).
*/
mongoose.set('strictQuery',true); 

/*
mongoose.connect est une methode de mongoose, qui permet de se connecter a notre base de données grace a l'URI que je place en premier parametre, en deuxieme parametre, 
elle prend une fonction callback qui a pour but d'afficher une erreur si il y en a une, sinon, j'affiche un message de reussite. 
*/
mongoose.connect(db, (err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("connecté à mongoDB");
    }
})