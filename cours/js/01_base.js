/* 
       les variables
       la declaration des variables en javascript se fait avec
       var nom_de_varaible=valeur;
       il ya deux versions javacript(deux standard) Ecmascript5(es5) et Ecmascript6(es6)
       avec Es6= let nom_variables=valeur;
       idealament les noms des variables contient des alphanumeriques avec underscore tout est attaché et pas de caractères speciaux, il faut pas qu'il commence par un chiffre
       je peux declarer des variables vides:
       var prenom;
​
   */
 /* 
    les types de variables:
        on a le type number(entier), string(chaine de caractere), boolean(true ou false),tableau,objet, float(nombre decimal qui est avec virgule)
        chaque instruction se termine avec pont virgule ;
        var age=30;// déclaration d'une variable de type number
        var prenom="Amal";//déclaration d'une varaible de type chaine de caractère
        var bool=true/false;//la declaration d'une variable
        var nombre_dec=5.35;//la declaration d'un nombre decimal(float)
​
​
    */
   var nom; //ici j'ai déclarer une variable
   nom="gope";// ici j'affecte une valeur pour variable déclarer;
   console.log(nom);
   nom="ng"
   var prenom="Nirmal";
   var age=29;
   console.log(typeof age);// typeof permet d'afficher le type de la variable
   console.log(prenom);
   console.log(age);
   //document.write(prenom);
   //alert("Super Groupe de Vitry, ils ont commencé le javaScript")
   //window.alert(prenom);
   var question=prompt("EST ce que vous avez aimé le javaScript?");
   console.log(question);
//la déclaration d'une constante se fait avec const, le nom de la constante s'ectit tout en majuscule, c'st une valeur constante tout au long le projet qui change pas
const DEVISE="Euro";
const ANNEE="2020";
//on dit que javascript est autotypés, puisque il affecte les types de variables selon la v aleur affecté
//le changment de type de variable, changment de number vers string, de string vers number, de number vers float, de float vers number.
var age=age.toString();//ici je change le type de variable age de number en chaine de caractere avec la function toString()
console.log(typeof age);
var votreDernierPrix;//les noms des variables et les fonctions ca commence par un minuscule et pour chaque nouveau mot doit commencer par majuscule.
var annee="2020";//variable annee est de type string
console.log(typeof annee);
var annee=parseInt(annee); //la fonction parseInt() permet de changer le type de variables en number, integer/entier
console.log(typeof annee);
/* Attention javascript est sensible à la casse('case sensitive'), il fait la difference entre majuscule et miniscule
maVariable =/= mavariable =/= ma_variable, ici pour javascript ils sont tout des variable différentes
*/
/*la conversion de type variable pour un type float avec parseFloat()*/
var prix=200;
console.log(typeof prix);
//var prix=parseFloat(prix);
console.log(typeof prix);
