// Afficher ou masquer le menu déroulant
function toggleLoginForm() {
    const form = document.getElementById("loginForm");
    form.style.display = form.style.display === "none" || form.style.display === "" ? "block" : "none";
}

function toggleLoginForm() {
    const form = document.getElementById("loginForm");
    const overlay = document.getElementById("overlay");
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block"; // Afficher la modale
        overlay.style.display = "block"; // Afficher l'overlay
    } else {
        form.style.display = "none"; // Masquer la modale
        overlay.style.display = "none"; // Masquer l'overlay
    }
}

function toggleDropdown() {
    document.getElementById("languageDropdown").classList.toggle("show");
}

function resetPassword() {
    alert("Redirection vers la page de réinitialisation de mot de passe.");
    // Ou rediriger vers une autre page:
    // window.location.href = "reset-password.html";
}

function createAccount() {
    alert("Redirection vers la page de création de compte.");
    // Ou rediriger vers une autre page:
    // window.location.href = "create-account.html";
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    const loginButton = document.getElementById("search-button1");

    // Simule une vérification de connexion réussie
    const isLoginSuccessful = true; // Remplacez par votre logique

    if (isLoginSuccessful) {
        loginButton.textContent = "Connecté";
        loginButton.disabled = true;
        loginButton.style.backgroundColor = "green";
    } else {
        loginButton.textContent = "Erreur de connexion";
        loginButton.style.backgroundColor = "red";
    }
});


// Changer la langue (simplement un exemple pour changer l'URL ou le contenu)
function changeLanguage(lang) {
    if (lang === 'fr') {
        window.location.href = "/fr";
    } else if (lang === 'en') {
        window.location.href = "/en";
    } else if (lang === 'es') {
        window.location.href = "/es";
    } else if (lang === 'zh') {
        window.location.href = "/zh";
    } else if (lang === 'hi') {
        window.location.href = "/hi";
    } else if (lang === 'ar') {
        window.location.href = "/ar";
    } else if (lang === 'bn') {
        window.location.href = "/bn";
    } else if (lang === 'ru') {
        window.location.href = "/ru";
    } else if (lang === 'pt') {
        window.location.href = "/pt";
    } else if (lang === 'ur') {
        window.location.href = "/ur";
    }
}

// Fermer le menu déroulant si on clique en dehors
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}