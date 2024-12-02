// Afficher une menu deroulant qui propose des destinations en fonction de la recherche
const data = [ // Afrique
    "Alger", "Luanda", "Porto-Novo", "Gaborone", "Ouagadougou", "Bujumbura", 
    "Yaoundé", "Praia", "Bangui", "N'Djamena", "Moroni", "Kinshasa", "Brazzaville", 
    "Djibouti", "Le Caire", "Malabo", "Asmara", "Addis-Abeba", "Libreville", "Banjul", 
    "Accra", "Conakry", "Bissau", "Nairobi", "Maseru", "Monrovia", "Tripoli", 
    "Antananarivo", "Lilongwe", "Bamako", "Nouakchott", "Port-Louis", "Rabat", 
    "Maputo", "Windhoek", "Niamey", "Abuja", "Kigali", "São Tomé", "Dakar", 
    "Victoria", "Freetown", "Mogadiscio", "Pretoria", "Juba", "Khartoum", 
    "Mbabane", "Dodoma", "Lomé", "Tunis", "Kampala", "Lusaka", "Harare",

    // Amérique
    "Saint John's", "Buenos Aires", "Nassau", "Bridgetown", "Belmopan", 
    "Sucre", "Brasília", "Ottawa", "Santiago", "Bogotá", "San José", 
    "La Havane", "Roseau", "Saint-Domingue", "Quito", "San Salvador", 
    "Saint-Georges", "Guatemala", "Georgetown", "Port-au-Prince", "Tegucigalpa", 
    "Kingston", "Mexico", "Managua", "Panama", "Asuncion", "Lima", 
    "Basseterre", "Castries", "Kingstown", "Paramaribo", "Port-d'Espagne", 
    "Montevideo", "Caracas", "Washington D.C.",

    // Asie
    "Kaboul", "Riyad", "Erevan", "Bakou", "Manama", "Dacca", "Thimphou", 
    "Bandar Seri Begawan", "Naypyidaw", "Phnom Penh", "Pékin", "Nicosie", 
    "Pyongyang", "Séoul", "Tbilissi", "New Delhi", "Jakarta", "Téhéran", 
    "Bagdad", "Tel Aviv", "Tokyo", "Amman", "Astana", "Koweït", "Bichkek", 
    "Vientiane", "Beyrouth", "Kuala Lumpur", "Malé", "Oulan-Bator", "Katmandou", 
    "Mascate", "Islamabad", "Manille", "Doha", "Moscou", "Riyad", "Singapour", 
    "Colombo", "Damas", "Douchanbé", "Bangkok", "Ankara", "Achgabat", "Abou Dabi", 
    "Tachkent", "Hanoï", "Sana'a",

    // Europe
    "Tirana", "Andorre-la-Vieille", "Vienne", "Minsk", "Bruxelles", 
    "Sarajevo", "Sofia", "Zagreb", "Nicosie", "Prague", "Copenhague", 
    "Tallinn", "Helsinki", "Paris", "Tbilissi", "Berlin", "Athènes", 
    "Budapest", "Reykjavik", "Dublin", "Rome", "Pristina", "Riga", 
    "Vaduz", "Vilnius", "Luxembourg", "La Valette", "Chisinau", 
    "Monaco", "Podgorica", "Amsterdam", "Skopje", "Oslo", "Varsovie", 
    "Lisbonne", "Bucarest", "Moscou", "Saint-Marin", "Belgrade", 
    "Bratislava", "Ljubljana", "Madrid", "Stockholm", "Berne", "Kiev", 
    "Londres", "Cité du Vatican",

    // Océanie
    "Canberra", "Suva", "Tarawa", "Majuro", "Palikir", "Wellington", 
    "Ngerulmud", "Port Moresby", "Apia", "Honiara", "Nukuʻalofa", 
    "Funafuti", "Port-Vila", "Yaren"];

function autoComplete() {
    const input = document.getElementByClass("search-input3");
    const suggestions = document.getElementById("suggestions");
    const query = input.value.toLowerCase();

    // Réinitialise les suggestions
    suggestions.innerHTML = "";

    // Affiche les suggestions si la saisie a au moins 3 lettres
    if (query.length >= 3) {
        const filteredData = data.filter(item => item.toLowerCase().includes(query));

        // Ajoute les suggestions filtrées
        filteredData.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;

            // Remplit le champ d'entrée lors d'un clic
            li.addEventListener("click", () => {
                input.value = item;
                suggestions.innerHTML = "";
            });

            suggestions.appendChild(li);
        });
    }
}

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

// script.js

// Fonction pour changer la langue
function changeLanguage(language) {
    // Sélectionner tous les éléments avec un attribut data-en ou data-fr
    const elements = document.querySelectorAll('[data-en], [data-fr], [data-es]');

    // Parcourir chaque élément et mettre à jour son contenu
    elements.forEach(element => {
        if (language === 'fr') {
            element.textContent = element.getAttribute('data-fr') || element.textContent;
        } else if (language === 'en') {
            element.textContent = element.getAttribute('data-en') || element.textContent;
        }
    });
}


/* Changer la langue (simplement un exemple pour changer l'URL ou le contenu)
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
*/

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
