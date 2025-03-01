const navMobile = document.getElementById('nav-mobile');
const openBtn = document.getElementById('openbtn');
const closeBtn = document.getElementById('closebtn');
const navLinks = document.querySelectorAll('#nav-links-mobile');
const navNormal = document.getElementById('nav-normal');

// Fonction pour activer ou désactiver le menu en fonction de la largeur de l'écran
const handleResize = () => {
    if (window.innerWidth <= 1190) {
        // Affiche le bouton d'ouverture et configure les événements
        openBtn.style.display = 'block';
       
        openBtn.addEventListener('click', openMenu);
        closeBtn.addEventListener('click', closeMenu);
    } else {
        // Cache tous les éléments liés au menu mobile
        openBtn.style.display = 'none';
        closeBtn.style.display = 'none';
        navMobile.style.display = 'none';
        navNormal.style.display = 'flex';

        // Supprime les événements inutiles
        openBtn.removeEventListener('click', openMenu);
        closeBtn.removeEventListener('click', closeMenu);
    }
};

// Fonction pour ouvrir le menu
const openMenu = (e) => {
    e.preventDefault();
    navNormal.style.display = 'none';
    navMobile.style.display = 'flex';
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
    navLinks.forEach((link) => {
        link.style.display = 'flex';
    });
};

// Fonction pour fermer le menu
const closeMenu = (e) => {
    e.preventDefault();
    navMobile.style.display = 'none';
    openBtn.style.display = 'block';
    closeBtn.style.display = 'none';
    navNormal.style.display = 'flex';
};

// Initialisation et écoute des changements de taille de la fenêtre
handleResize();
window.addEventListener('resize', handleResize);

document.addEventListener("DOMContentLoaded", () => {
    const curseur = document.querySelector(".abeille");

    document.addEventListener("mousemove", (event) => {
        curseur.style.left = `${event.clientX}px`;
        curseur.style.top = `${event.clientY}px`;
    });
});

//certifications//
const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
let currentIndex = 0;

const updateCarousel = () => {
    const itemWidth = track.children[0].offsetWidth;
    const gap = 20;
    const visibleItems = window.innerWidth <= 880 ? 1 : Math.floor(track.offsetWidth / (itemWidth + gap));
    track.style.transform = `translateX(-${currentIndex * (itemWidth + gap)}px)`;
};

nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= track.children.length) currentIndex = 0;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = track.children.length - 1;
    updateCarousel();
});

window.addEventListener('resize', updateCarousel);
updateCarousel();

//contact//

const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const mailtoLink = `mailto:example@example.com?subject=${encodeURIComponent(formData.get('subject'))}&body=${encodeURIComponent(formData.get('message'))}`;
    window.location.href = mailtoLink;
    form.reset();
    alert('Votre message a bien été envoyé');
});

//impression cv//

const printButton = document.getElementById('btn-cv');

function printCV() {
    alert('Le CV va être imprimé');
    const printWindow = window.open('cv.html', '_blank');
    printWindow.onload = function() {
        printWindow.print();
    };
}
printButton.addEventListener('click', printCV);
