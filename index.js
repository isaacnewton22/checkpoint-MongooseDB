
require("./DB.js")

const userModel = require("./users.js")

//creation d'une instance de document

/* const userInstance = new userModel({
    name: "Newton",
    age: 14,
    favoriteFoods: ["Borritos"]
}) */

//sauvegarde de l'instance

/* userInstance.save() */


//tableau de personne à creer 
/* const peoples = [
    {name: "Alice", age: 25, favoriteFoods: ["burger","frites"]},
    {name: "Bob", age: 28, favoriteFoods: ["pizza","salade"]},
    {name: "Charlie", age: 32, favoriteFoods: ["tacos","guacamole"]}
]


//fonction qui enregistre un tableau de personnes
function arrayOfPeople(arrayOfPeople){
    userModel.create(arrayOfPeople).then((data) => {
        console.log("Données enregistrées avec succès : ", data)
    })
}


//appel de la fonction
arrayOfPeople(peoples)
 */


//afficher tout les users
/* userModel.find({})
    .then((users) => {
        console.log("Utilisateurs trouvés : ", users)
    }) */


//afficher un user
/* userModel.findOne({name:"John Doe"})
    .then((user) => {
        console.log("Utilisateur trouvé : ", user)
    })
 */


//afficher un user par id
/* userModel.findById('66d050e5bd7d0f4e0bcb9bb1')
    .then((user) => {
        console.log("Utilisateur trouvé : ", user)
    })
 */

/* userModel.findById('66d050e5bd7d0f4e0bcb9bb1')
.then((user) => {
    user.favoriteFoods.push("Burger")
    user.save()
    .then((result) => console.log("Utilisateur trouvé : ", result));
});
 */

//Modification d'un user
/* userModel.findOneAndUpdate({name:"Bob"},{age:20})
    .then((user) => {
        console.log("Utilisateur modifié : ", user)
    })
 */


//supprimer un user    
/* userModel.findByIdAndDelete('66d050e5bd7d0f4e0bcb9bb1')
    .then((user) => {
        console.log("Utilisateur modifié : ", user)
    }) */

//supprimer plusieurs users        
/* userModel.deleteMany({name:"Newton"})
    .then((user) => {
        console.log("Utilisateurs supprimés : ", user)
    }) */

userModel.find({favoriteFoods: {$in:["pizza"]}}).limit(2).sort({name:1}).select({age:false}).exec()
.then((users)=> console.log(users))

