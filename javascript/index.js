// 
// 
// do{
// var choix = Number(prompt("Que souhaitez-vous faire\n\n1-Addition\n2-Multiplication\n3-Soustraction\n4-Division"));
// }while( choix != 1 && choix != 2 && choix != 3 &&choix != 4  );

// do{
//     var premierNombre = Number(prompt("Entrer le premier nombre"));
//     var deuxiemeNombre = Number(prompt("Entrer le deuxieme nombre"));
// }while(isNaN(premierNombre)|| isNaN(deuxiemeNombre));

// function Addition(nombreA, nombreB) {
//     return nombreA + nombreB;
// }
// function Multiplication(nombreA, nombreB) {
//     return nombreA * nombreB;
// }
// function Soustraction(nombreA, nombreB) {
//     return nombreA - nombreB;
// }
// function Division(nombreA, nombreB) {
//     if (nombreB == 0) {
//         throw new Error("impossible de diviser par zero");
//     }
//     return nombreA / nombreB;
    
// }

// try {
//  switch (choix)  {
//     case 1:
//     var resultat = Addition(premierNombre, deuxiemeNombre);
        
//         break;
//     case 2:
//     var resultat = Multiplication(premierNombre, deuxiemeNombre);
            
//         break;
//     case 3:
//     var resultat = Soustraction(premierNombre, deuxiemeNombre);
                
//         break;
//     case 4:
//     var resultat = Division(premierNombre, deuxiemeNombre);
                    
//         break;
//         default:
//             throw new Error("il y a une erreur");

// }  
//  alert("voici  le resultat " + resultat);
// } catch (error) {
//     alert(error);
// }
function somme(nombres) {
if(nombres ==  1){
    
return 1;
}
return nombres + somme(nombres - 1);
    
}
console.log(somme(3));