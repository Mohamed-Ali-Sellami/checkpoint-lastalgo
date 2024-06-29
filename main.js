function estBissextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Test de la fonction
let annee = 2024;
if (estBissextile(annee)) {
    console.log(`${annee} est une année bissextile.`);
} else {
    console.log(`${annee} n'est pas une année bissextile.`);
}






function prixBillet(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Test de la fonction
let age = prompt("Veuillez saisir votre âge:");
console.log(`Le prix du billet est: ${prixBillet(age)} $`);


function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Test de la fonction
let n = 10;
console.log(`Le ${n}ème nombre de Fibonacci est: ${fibonacci(n)}`);







function estPalindrome(chaine) {
    chaine = chaine.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (chaine.length <= 1) {
        return true;
    } else if (chaine[0] !== chaine[chaine.length - 1]) {
        return false;
    } else {
        return estPalindrome(chaine.slice(1, -1));
    }
}

// Test de la fonction
let chaine = "A man, a plan, a canal, Panama";
if (estPalindrome(chaine)) {
    console.log(`'${chaine}' est un palindrome.`);
} else {
    console.log(`'${chaine}' n'est pas un palindrome.`);
}