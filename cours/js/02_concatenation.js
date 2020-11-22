var var1="je suis une chaine caractéres";
var var2="concaténée à partir de plusieurs chaines"
var result=var1+" "+var2;//la concaténation se fait avec l'operateur +, on peut concaténer des variable avec des chaines de caractères
console.log(result);
document.write(result + "<br>");
var annee=2017;
var mois=11;
var calcul=annee+mois;//la concatenation avec des numbers ca déffère a celle des chaines de charactères, avec les numbers se fait comme operation d'addition
//pour concatener des number sous form de chaines  de caractères, on peut utiliser la fonction toString()
document.write(calcul +"<br>");
var calcul=annee.toString()+mois.toString();
document.write("Bonjiur groupe de Vitry vous etes en mois de: "+mois);