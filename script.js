// On sélectionne le formulaire et le champ de prénom
const form = document.querySelector('form');
const baliseprenom = document.getElementById('name');
const messagePerso = document.getElementById('message');

// Fonction pour valider le prénom
function validerprenom(prenom) {
    let prenomRegExp = new RegExp("^[a-zA-Z]+$"); // Autorise les lettres majuscules et minuscules
    if (!prenomRegExp.test(prenom)) {
        throw new Error("Le prénom n'est pas valide. Il doit contenir uniquement des lettres.");
    }
}

// Quand on soumet le formulaire
form.addEventListener("submit", (event) => {
    // On empêche le comportement par défaut
    event.preventDefault();

    // Récupère le prénom saisi
    let prenom = baliseprenom.value;

    // On valide le prénom
    try {
        validerprenom(prenom); // Vérification du prénom
        console.log(prenom); // Affichage dans la console si valide

        // Affiche le message personnalisé
        messagePerso.textContent = `Bonjour, ${prenom} ! Bienvenue sur notre site.`;
    } catch (error) {
        // Affiche l'erreur si le prénom est invalide
        console.log(error.message);
        messagePerso.textContent = error.message;
    }
});

// S'assure que le champ pour le prénom est rempli lors de l'édition
baliseprenom.addEventListener('input', (event) => {
    const valeurprenom = event.target.value;
    if (valeurprenom === "") {
        console.log('Le champ prénom est vide');
        messagePerso.textContent = 'Veuillez remplir votre prénom.';
    } else {
        console.log('Le champ prénom est rempli');
        messagePerso.textContent = ''; // Effacer le message d'erreur quand le champ est rempli
    }
});
