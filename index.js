


// Récupération du formulaire
var form = document.getElementById('myform');

// Ajout d'un événement de soumission pour le formulaire
  form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Récupération des valeurs du formulaire
  var titre = document.getElementById('titre').value;
  var montant = document.getElementById('montant').value;

  // Création d'un objet avec les données du formulaire
  var formData = {
    titre: titre,
    montant: montant
  };

  // Récupération des données existantes dans le localStorage
  var table_depense = localStorage.getItem('formData');
  var data = [];

  if (table_depense) {
    data = JSON.parse(table_depense);

  }

  // Ajout des nouvelles données à la liste existante
  data.push(formData);

  // Stockage des données mises à jour dans le localStorage
  localStorage.setItem('formData', JSON.stringify(data));

  // Appel de la fonction pour afficher le tableau avec les données mises à jour
  afficherTableau(data);

  // Réinitialisation du formulaire
  form.reset();

  // Affichage d'un message de confirmation
  alert('Formulaire soumis avec succès');
});



// Fonction pour afficher le tableau avec les données
function afficherTableau(data) {
  // Récupération de l'élément conteneur du tableau
  var containers = document.getElementById('containers');

  // Suppression des anciennes données du tableau
  while (containers.firstChild) {
    containers.removeChild(containers.firstChild);
  }

  // Création du tableau
  var tableau = document.createElement('table');
  tableau.classList.add('tableau-style');

  // Création du corps du tableau
  var tbody = document.createElement('tbody');

  // Parcours des données pour créer les lignes du tableau
  for (var i = 0; i < data.length; i++) {
    var row = data[i];

    var ligne = document.createElement('tr');

    var celluleTitre = document.createElement('td');
    celluleTitre.textContent = row.titre;

    var celluleMontant = document.createElement('td');
    celluleMontant.textContent = row.montant;
    var celluleActions = document.createElement('td');
    var boutonSupprimer = document.createElement('button');
    boutonSupprimer.textContent = 'Supprimer';
    boutonSupprimer.classList.add('btn-supprimer');

    // Gestionnaire d'événement pour le clic sur le bouton "Supprimer"
    boutonSupprimer.addEventListener('click', function() {
      // Récupération de la ligne parente (tr) du bouton
      var ligneParente = this.parentNode.parentNode;
    
      // Obtention de l'index à partir d'un attribut de données sur la ligne parente
      var indexToRemove = parseInt(ligneParente.getAttribute('data-index'));
    
      // Suppression de la ligne du tableau
      ligneParente.parentNode.removeChild(ligneParente);
    
      var table_depense = localStorage.getItem('formData');
      var data = [];
      
      if (table_depense) {
        data = JSON.parse(table_depense);
      }
    
      // Suppression de l'élément du tableau en utilisant l'index
      data.splice(indexToRemove, 1);
    
      // Mise à jour des données dans le localStorage
      localStorage.setItem('formData', JSON.stringify(data));
    });

    celluleActions.appendChild(boutonSupprimer);

    ligne.appendChild(celluleTitre);
    ligne.appendChild(celluleMontant);
    ligne.appendChild(celluleActions);

    tbody.appendChild(ligne);
  }

  tableau.appendChild(tbody);
  containers.appendChild(tableau);
}

// Récupération des données existantes dans le localStorage et affichage initial du tableau
var table_depense = localStorage.getItem('formData');
var data = [];

if (table_depense) {
  data = JSON.parse(table_depense);
}

var montant_depense = data.map(function(item){
  return item.montant
})
var somme_depense = montant_depense.reduce(function(total, montant){
  return total + parseFloat(montant)
},0)

var Eldepense = document.getElementById("item-depense")
Eldepense.textContent = somme_depense + "F CFA"
console.log("somme_depense", somme_depense)

afficherTableau(data);



//modal
let   modal = document.getElementById("ajoutModal")
let   modalButton = document.getElementById("addDepenseButton")

let close = document.querySelector(".close")
let openModalDep = document.getElementById("openModalDep")

// openModalDep.addEventListener('click',function() {
//     modal.style.display = 'block'
// })
openModalDep.onclick = function(){
    modal.style.display='block'
}
close.onclick = function(){
  modal.style.display='none'
}

//modal2
let   modal2 = document.getElementById("ajoutModal2")
let   modalButton2 = document.getElementById("addRevenuButton")

let clos = document.querySelector(".clos")
let openModalRev = document.getElementById("openModalRev")

// openModalDep.addEventListener('click',function() {
//     modal.style.display = 'block'
// })
openModalRev.onclick = function(){
    modal2.style.display='block'
}



clos.onclick = function(){
  modal2.style.display='none'
  // update();
}
//partie revenu

// Récupération du formulaire
var form1 = document.getElementById('myform1');

// Ajout d'un événement de soumission pour le formulaire
form1.addEventListener('submit', function(event) {
  event.preventDefault();

// Récupération des valeurs du formulaire
  var titre2 = document.getElementById('titre2').value;
  var montant2 = document.getElementById('montant2').value;

 // Création d'un objet avec les données du formulaire
 var formData1 = {
  titre: titre2,
  montant: montant2
};
 // Récupération des données existantes dans le localStorage
 var table_depense1 = localStorage.getItem('formData1');
 var data1 = [];
 if (table_depense1) {
  data1 = JSON.parse(table_depense1);
}
// Ajout des nouvelles données à la liste existante
data1.push(formData1);

  // Stockage des données mises à jour dans le localStorage
  localStorage.setItem('formData1', JSON.stringify(data1));

  // Appel de la fonction pour afficher le tableau avec les données mises à jour
  afficherTableau1(data1);

   // Réinitialisation du formulaire
   form1.reset();

     // Affichage d'un message de confirmation
  alert('Formulaire soumis avec succès');
});
// Fonction pour afficher le tableau avec les données
function afficherTableau1(data1) {
  // Récupération de l'élément conteneur du tableau
  var containers1 = document.getElementById('containers1');

   // Suppression des anciennes données du tableau
   while (containers1.firstChild) {
    containers1.removeChild(containers1.firstChild);
  }
  // Création du tableau
  var tableau1 = document.createElement('table');
  tableau1.classList.add('tableau-style');
  // Création du corps du tableau
  var tbody = document.createElement('tbody');

  // Parcours des données pour créer les lignes du tableau
  for (var i = 0; i < data1.length; i++) {
    var row1 = data1[i];
    var ligne1 = document.createElement('tr');

    var celluleTitre1 = document.createElement('td');
    celluleTitre1.textContent = row1.titre;

    var celluleMontant1 = document.createElement('td');
    celluleMontant1.textContent = row1.montant;
    var celluleActions1 = document.createElement('td');
    var boutonSupprimer1 = document.createElement('button');
    boutonSupprimer1.textContent = 'Supprimer';
    boutonSupprimer1.classList.add('btn-supprimer');

        // Gestionnaire d'événement pour le clic sur le bouton "Supprimer"
        boutonSupprimer1.addEventListener('click', function() {
          // Récupération de la ligne parente (tr) du bouton
          var ligneParente1 = this.parentNode.parentNode;
        
          // Obtention de l'index à partir d'un attribut de données sur la ligne parente
          var indexToRemove = parseInt(ligneParente1.getAttribute('data-index'));
        
          // Suppression de la ligne du tableau
          ligneParente1.parentNode.removeChild(ligneParente1);
        
          var table_revenu = localStorage.getItem('formData1');
          var data1 = [];
          
          if (table_revenu) {
            data1 = JSON.parse(table_revenu);
          }
        
          // Suppression de l'élément du tableau en utilisant l'index
          data1.splice(indexToRemove, 1);
        
          // Mise à jour des données dans le localStorage
          localStorage.setItem('formData1', JSON.stringify(data1));
        });

   
    celluleActions1.appendChild(boutonSupprimer1);

    ligne1.appendChild(celluleTitre1);
    ligne1.appendChild(celluleMontant1);
    ligne1.appendChild(celluleActions1);

    tbody.appendChild(ligne1);
  }
  tableau1.appendChild(tbody);
  containers1.appendChild(tableau1);
}
// Récupération des données existantes dans le localStorage et affichage initial du tableau
var table_depense1 = localStorage.getItem('formData1');
var data1 = [];

if (table_depense1) {
  data1 = JSON.parse(table_depense1);
}

var montant_revenu = data1.map(function(item){
  return item.montant
})
var somme_revenu = montant_revenu.reduce(function(total, montant){
  return total + parseFloat(montant)
},0)

var ElRevenu = document.getElementById("item-revenu")
ElRevenu.textContent = somme_revenu + "F CFA"
console.log("somme_revenu", somme_revenu)

afficherTableau1(data1);


var ElBudget = document.getElementById("item-budget")
var somme_budget = somme_depense + somme_revenu
ElBudget.textContent = somme_budget + "F CFA"
console.log("somme_budget", somme_budget)

function update (){
  window.location.href = "file:///C:/Users/AS TECHNOLOGIES/Desktop/GestionDeBudget";
  
}